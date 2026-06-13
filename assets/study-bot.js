(function () {
  'use strict';

  var DEFAULT_REACTIONS = [
    { cls: 'reacting-wave', msg: 'Hello, learner!' },
    { cls: 'reacting-blink', msg: 'Focus mode on.' },
    { cls: 'reacting-surprise', msg: 'New topic detected!' },
    { cls: 'reacting-nod', msg: "You've got this." },
    { cls: 'reacting-heart', msg: 'GenAI is awesome.' }
  ];

  var bot = document.getElementById('studyBot');
  if (!bot) return;

  var headAnim = document.getElementById('robotHeadAnim');
  var torso = document.getElementById('robotTorso');
  var eyeLeft = document.getElementById('eyeLeft');
  var eyeRight = document.getElementById('eyeRight');
  var bubble = document.getElementById('robotBubble');

  if (!headAnim || !torso || !eyeLeft || !eyeRight || !bubble) return;

  var config = window.StudyBotConfig || {};
  var reactions = config.reactions || DEFAULT_REACTIONS;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var EYE_L = { x: 82, y: 58 };
  var EYE_R = { x: 118, y: 58 };
  var NECK = { x: 100, y: 100 };
  var TORSO = { x: 100, y: 180 };

  var reactionIdx = 0;
  var reactionTimer = null;
  var bubbleTimer = null;
  var reacting = false;
  var targetX = 0;
  var targetY = 0;
  var smoothRot = 0;
  var smoothLean = 0;
  var smoothEyeX = 0;
  var smoothEyeY = 0;

  function headCenter() {
    var rect = bot.getBoundingClientRect();
    var scale = rect.width / 200;
    return {
      x: rect.left + NECK.x * scale,
      y: rect.top + 55 * scale
    };
  }

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function trackMouse(e) {
    if (reducedMotion) return;
    var c = headCenter();
    targetX = e.clientX - c.x;
    targetY = e.clientY - c.y;
  }

  function animateFollow() {
    if (!reducedMotion && !reacting) {
      var dist = Math.hypot(targetX, targetY) || 1;
      var normX = targetX / dist;
      var normY = targetY / dist;
      var reach = Math.min(dist / 220, 1);

      var goalRot = clamp(normX * 26 * reach, -26, 26);
      var goalLean = clamp(normX * 5 * reach, -5, 5);
      var goalEyeX = clamp(normX * 7 * reach, -7, 7);
      var goalEyeY = clamp(normY * 5 * reach, -5, 5);

      smoothRot += (goalRot - smoothRot) * 0.14;
      smoothLean += (goalLean - smoothLean) * 0.1;
      smoothEyeX += (goalEyeX - smoothEyeX) * 0.18;
      smoothEyeY += (goalEyeY - smoothEyeY) * 0.18;

      headAnim.setAttribute(
        'transform',
        'rotate(' + smoothRot.toFixed(2) + ' ' + NECK.x + ' ' + NECK.y + ')'
      );
      torso.setAttribute(
        'transform',
        'rotate(' + smoothLean.toFixed(2) + ' ' + TORSO.x + ' ' + TORSO.y + ')'
      );
      eyeLeft.setAttribute(
        'transform',
        'translate(' + (EYE_L.x + smoothEyeX).toFixed(2) + ' ' + (EYE_L.y + smoothEyeY).toFixed(2) + ')'
      );
      eyeRight.setAttribute(
        'transform',
        'translate(' + (EYE_R.x + smoothEyeX).toFixed(2) + ' ' + (EYE_R.y + smoothEyeY).toFixed(2) + ')'
      );
    }
    requestAnimationFrame(animateFollow);
  }

  function clearReaction() {
    reacting = false;
    reactions.forEach(function (r) {
      bot.classList.remove(r.cls);
    });
    bot.classList.remove('show-bubble');
  }

  function playReaction() {
    clearReaction();
    if (reactionTimer) clearTimeout(reactionTimer);
    if (bubbleTimer) clearTimeout(bubbleTimer);

    reacting = true;
    var reaction = reactions[reactionIdx % reactions.length];
    reactionIdx += 1;
    bot.classList.add(reaction.cls);
    bubble.textContent = reaction.msg;
    bot.classList.add('show-bubble');

    reactionTimer = setTimeout(clearReaction, 900);
    bubbleTimer = setTimeout(function () {
      bot.classList.remove('show-bubble');
    }, 2200);
  }

  eyeLeft.setAttribute('transform', 'translate(' + EYE_L.x + ' ' + EYE_L.y + ')');
  eyeRight.setAttribute('transform', 'translate(' + EYE_R.x + ' ' + EYE_R.y + ')');
  document.addEventListener('mousemove', trackMouse);
  requestAnimationFrame(animateFollow);
  bot.addEventListener('click', playReaction);
  bot.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      playReaction();
    }
  });
})();

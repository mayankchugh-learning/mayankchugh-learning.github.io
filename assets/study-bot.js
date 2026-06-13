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

  var smooth = {
    headRot: 0,
    headX: 0,
    headY: 0,
    torsoLean: 0,
    torsoX: 0,
    torsoY: 0,
    eyeX: 0,
    eyeY: 0,
    botX: 0,
    botY: 0
  };

  function headCenter() {
    var rect = bot.getBoundingClientRect();
    var scale = rect.width / 200;
    return {
      x: rect.left + NECK.x * scale,
      y: rect.top + 55 * scale
    };
  }

  function soft(v, range) {
    return Math.tanh(v / range) * range;
  }

  function lerp(current, target, amount) {
    return current + (target - current) * amount;
  }

  function adaptiveLerp(current, target, base) {
    var delta = Math.abs(target - current);
    return lerp(current, target, Math.min(base + delta * 0.035, 0.42));
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
      var pull = Math.min(dist / 90, 2.2);

      var goalHeadRot = soft(targetX * 0.14, 48);
      var goalHeadX = soft(targetX * 0.1, 26);
      var goalHeadY = soft(targetY * 0.09, 22);
      var goalTorsoLean = soft(targetX * 0.08, 18);
      var goalTorsoX = soft(targetX * 0.045, 14);
      var goalTorsoY = soft(targetY * 0.03, 10);
      var goalEyeX = soft(normX * 16 * pull, 16);
      var goalEyeY = soft(normY * 12 * pull, 12);
      var goalBotX = soft(targetX * 0.055, 18);
      var goalBotY = soft(targetY * 0.04, 14);

      smooth.headRot = adaptiveLerp(smooth.headRot, goalHeadRot, 0.16);
      smooth.headX = adaptiveLerp(smooth.headX, goalHeadX, 0.2);
      smooth.headY = adaptiveLerp(smooth.headY, goalHeadY, 0.2);
      smooth.torsoLean = adaptiveLerp(smooth.torsoLean, goalTorsoLean, 0.14);
      smooth.torsoX = adaptiveLerp(smooth.torsoX, goalTorsoX, 0.16);
      smooth.torsoY = adaptiveLerp(smooth.torsoY, goalTorsoY, 0.16);
      smooth.eyeX = adaptiveLerp(smooth.eyeX, goalEyeX, 0.24);
      smooth.eyeY = adaptiveLerp(smooth.eyeY, goalEyeY, 0.24);
      smooth.botX = adaptiveLerp(smooth.botX, goalBotX, 0.12);
      smooth.botY = adaptiveLerp(smooth.botY, goalBotY, 0.12);

      bot.style.transform =
        'translate(' + smooth.botX.toFixed(2) + 'px, ' + smooth.botY.toFixed(2) + 'px)';

      headAnim.setAttribute(
        'transform',
        'translate(' + smooth.headX.toFixed(2) + ' ' + smooth.headY.toFixed(2) + ') ' +
        'rotate(' + smooth.headRot.toFixed(2) + ' ' + NECK.x + ' ' + NECK.y + ')'
      );
      torso.setAttribute(
        'transform',
        'translate(' + smooth.torsoX.toFixed(2) + ' ' + smooth.torsoY.toFixed(2) + ') ' +
        'rotate(' + smooth.torsoLean.toFixed(2) + ' ' + TORSO.x + ' ' + TORSO.y + ')'
      );
      eyeLeft.setAttribute(
        'transform',
        'translate(' + (EYE_L.x + smooth.eyeX).toFixed(2) + ' ' + (EYE_L.y + smooth.eyeY).toFixed(2) + ')'
      );
      eyeRight.setAttribute(
        'transform',
        'translate(' + (EYE_R.x + smooth.eyeX).toFixed(2) + ' ' + (EYE_R.y + smooth.eyeY).toFixed(2) + ')'
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

  bot.style.willChange = 'transform';
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

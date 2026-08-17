# HTML patterns for DETAIL_HELP

Reuse classes already defined in `Sales_SSBI_Interview_Drill.html`.

## Infographic (top of modal)

```html
<figure class="detail-figure">
  <img src="../../assets/learning/kebab-name.png" alt="…" width="1400" height="900" loading="lazy">
  <figcaption>…</figcaption>
</figure>
```

## Side-by-side comparison

```html
<div class="diag-grid">
  <div class="diag-box">
    <div class="label">Left label</div>
    <pre>...</pre>
  </div>
  <div class="diag-box">
    <div class="label">Right label</div>
    <pre>...</pre>
  </div>
</div>
```

## Before / after flows

```html
<div class="flow-box broken">
  <div class="flow-title bad">BEFORE — ...</div>
  <pre>...</pre>
  <p>...</p>
  <div class="math-box">formula</div>
</div>

<div class="flow-box fixed">
  <div class="flow-title good">AFTER — ...</div>
  <pre>...</pre>
</div>
```

## Decision tree

```html
<div class="tree-box">
<pre>[ Root ]
   |
   +---> branch</pre>
</div>
```

## Takeaway

```html
<div class="takeaway">
  <strong>Key takeaway:</strong> ...
  <ul style="margin:8px 0 0 1.1rem;">
    <li>...</li>
  </ul>
</div>
```

## Minimal skeleton

```html
<h3>1. What happened</h3>
<p>...</p>
<h3>2. Why</h3>
<div class="flow-box broken">...</div>
<div class="flow-box fixed">...</div>
<h3>3. Fix / rule</h3>
<div class="takeaway">...</div>
```

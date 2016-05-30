
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>A lot of users of the <code>slides</code> option in <code>IPython.nbconvert</code> asked me about how to get a pdf from the generated Reveal.js-based slideshow.</p>
<p>To make the story short, here you have the detailed steps:
<!-- TEASER_END --></p>
<ul>
<li><code>cd</code> in the directory where your slideshow lives</li>
<li>add this <code>custom.css</code> file: <a href="https://gist.github.com/damianavila/6211198">https://gist.github.com/damianavila/6211198</a></li>
<li>run this little snippet: <a href="https://gist.github.com/damianavila/6211211">https://gist.github.com/damianavila/6211211</a></li>
<li>run <code>python -m SimpleHTTPServer 8001</code></li>
<li>open Mozilla Firefox browser and point to <code>localhost:8001</code></li>
<li>add <code>?print.pdf</code> to the end of the url (ie, <code>http://127.0.0.1:8001/your-ipynb.slides.html?print-pdf</code>)</li>
<li>print to pdf (use <em>Landscape</em> orientation)</li>
</ul>
<p>Do you want to get this little hack integrated to IPython? @fperez, the IPython BDFL does:</p>
<p><blockquote class="twitter-tweet" data-conversation="none" data-cards="hidden" data-partner="tweetdeck"><p><a href="https://twitter.com/damian_avila">@damian_avila</a> <a href="https://twitter.com/profjsb">@profjsb</a> ultimately we should fold that into master though...</p>&mdash; Fernando Perez (@fperez_org) <a href="https://twitter.com/fperez_org/statuses/373190058326519808">August 29, 2013</a></blockquote></p>
<p><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></p>
<p>So, time to write some code and do a PR... in the meantime use this hack ;-)</p>
<p>Damián.</p>

</div>
</div>
</div>
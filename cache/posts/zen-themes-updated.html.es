
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>OK, time to recap some things... As you know, <a href="http://getnikola.com/"><strong>Nikola</strong></a> 7.0.0 was released some weeks ago. It has a lot of improvements, bug fixes and new features. I recommend you to download and try it!
As part of the release, we paid attention to update all the plugins and themes inside the <strong>Nikola Github organization</strong> (don't forget you can contribute with your own <a href="https://github.com/getnikola/plugins">plugins</a> and <a href="https://github.com/getnikola/nikola-themes">themes</a>!). So, I updated my own themes, in particular, the <strong>Zen</strong> ones.
<!-- TEASER_END --></p>
<p>As you also now, <strong>IPython 2.x</strong> was released just some weeks ago too. So, I took into account this two releases and updated the <strong>Zen</strong> themes to be compatible with both of them.
As a consequence of the update, the <code>zen-ipython</code> theme has change a little bit, some bugs were fixed and some features enabled. You can probably has noticed that if you visit my blog in the last two weeks. If you did not notice, first, buy some glasses ;-), and then, take a tour, visit some of my old posts (there are interesting new comments every week) and enjoy the new theme.</p>
<p>And... don't forget! You can get the <strong>Zen</strong> themes very easily. First, to list all the available themes at the <strong>Nikola</strong> themes repo:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[1]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="o">!</span>nikola install_theme -l
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

<div class="output_wrapper output_hidden">
  <div class="output">
    
<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre>Themes:
-------
blogtxt
bootstrap3-gradients
bootstrap3-gradients-jinja
ipython
ipython-xkcd
monospace
oldfashioned
planetoid
readable
reveal
reveal-jinja
zen
zen-ipython
zen-jinja
</pre>
</div>
</div>

</div>
</div>

  </div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Of course, don't use the <code>!</code> at the beginning of the line if you are outside <strong>IPython</strong>.</p>
<p>To install one of them, just write:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[2]:</div>
<div class="inner_cell">
  <div class="input_area">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="o">!</span>nikola install_theme zen-ipython
</pre></div>

    <i class="icon-hand-up icon-large" style="float:right; margin-bottom:8px; margin-right:10px">
    &nbsp;&nbsp;Click me to hide the output</i>
  </div>
</div>
</div>

<div class="output_wrapper output_hidden">
  <div class="output">
    
<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre><span class="ansi-yellow-intense-fg ansi-bold">[2014-05-30T18:28:23Z] WARNING: Nikola: Cannot load theme &#34;zen-ipython&#34;, using &#39;bootstrap&#39; instead.
</span><span class="ansi-white-fg">[2014-05-30T18:28:24Z] INFO: install_theme: Downloading: http://themes.getnikola.com/v7/zen-ipython.zip
</span><span class="ansi-white-fg">[2014-05-30T18:28:24Z] INFO: install_theme: Extracting: zen-ipython into themes
</span><span class="ansi-yellow-intense-fg ansi-bold">[2014-05-30T18:28:24Z] NOTICE: install_theme: This theme has a sample config file.  Integrate it with yours in order to make this theme work!
</span>Contents of the conf.py.sample file:

    NAVIGATION_LINKS = {
        DEFAULT_LANG: (
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">/index.html</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">Home</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-home</span><span class="ansi-yellow-fg">&#39;</span>),
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">/archive.html</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">Archives</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-folder-open-alt</span><span class="ansi-yellow-fg">&#39;</span>),
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">/categories/index.html</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">Tags</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-tags</span><span class="ansi-yellow-fg">&#39;</span>),
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">/rss.xml</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">RSS</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-rss</span><span class="ansi-yellow-fg">&#39;</span>),
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">http://getnikola.com</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">About me</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-user</span><span class="ansi-yellow-fg">&#39;</span>),
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">https://twitter.com/getnikola</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">My Twitter</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-twitter</span><span class="ansi-yellow-fg">&#39;</span>),
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">https://github.com/getnikola</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">My Github</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-github</span><span class="ansi-yellow-fg">&#39;</span>),
        )
    }

<span class="ansi-white-fg">[2014-05-30T18:28:24Z] INFO: install_theme: Downloading: http://themes.getnikola.com/v7/zen-jinja.zip
</span><span class="ansi-white-fg">[2014-05-30T18:28:26Z] INFO: install_theme: Extracting: zen-jinja into themes
</span><span class="ansi-yellow-intense-fg ansi-bold">[2014-05-30T18:28:26Z] NOTICE: install_theme: This theme has a sample config file.  Integrate it with yours in order to make this theme work!
</span>Contents of the conf.py.sample file:

    NAVIGATION_LINKS = {
        DEFAULT_LANG: (
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">/index.html</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">Home</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-home</span><span class="ansi-yellow-fg">&#39;</span>),
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">/archive.html</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">Archives</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-folder-open-alt</span><span class="ansi-yellow-fg">&#39;</span>),
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">/categories/index.html</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">Tags</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-tags</span><span class="ansi-yellow-fg">&#39;</span>),
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">/rss.xml</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">RSS</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-rss</span><span class="ansi-yellow-fg">&#39;</span>),
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">http://getnikola.com</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">About me</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-user</span><span class="ansi-yellow-fg">&#39;</span>),
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">https://twitter.com/getnikola</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">My Twitter</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-twitter</span><span class="ansi-yellow-fg">&#39;</span>),
            (<span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">https://github.com/getnikola</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">My Github</span><span class="ansi-yellow-fg">&#39;</span>, <span class="ansi-yellow-fg">&#39;</span><span class="ansi-yellow-fg">icon-github</span><span class="ansi-yellow-fg">&#39;</span>),
        )
    }

<span class="ansi-yellow-intense-fg ansi-bold">[2014-05-30T18:28:26Z] NOTICE: install_theme: Remember to set THEME=&#34;zen-ipython&#34; in conf.py to use this theme.
</span></pre>
</div>
</div>

</div>
</div>

  </div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>and your theme will be available at the themes folder in your site.</p>
<p>OK, short post for today, more coming soon.</p>
<p>Damián.</p>

</div>
</div>
</div>
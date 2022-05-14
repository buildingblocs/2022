---
layout: default
published: true
---

<br/><br/><br/><br/>

<section class="jumbo">
    <div class="main-div">
        <h1>
            {{ site.title }}<br>
            <span>June Conference</span><br>
            <span class="huge">2022</span>
        </h1>
        <h2>
            <span>Thursday 2 June - Saturday 4 June</span><br>
            <span>NUS School of Computing / Online</span>
        </h2>
	    <p><a class="btn" href="https://forms.gle/nRpQHPDduMHhZ9f37">Sign Up Now!</a></p>
	    <p><a class="btn" href="{{ site.baseurl }}/events/june-conference/">Find Out More!</a></p>
	    <h2>Other external programmes</h2>
	    <p><a href="https://codingcompetitions.withgoogle.com/kickstart">Google Kickstart</a> registration is open!</p>
	    <p><a href="https://for.edu.sg/bebrasdrctds">Bebras, DrCT and NM High School Data Science assessment/contests</a> are free for students in Singapore schools!</p> 
    <br/><br/>
    </div>
</section>
<br><br><br>
## Theme: Computational Thinking, AI and Blockchain Education

With the increasing importance of Computing education and AI literacy globally as well as disruptive emerging blockchain technologies, this year's focus areas will be on Computational Thinking, Artificial Intelligence and Blockchain Education!

Learn about <a href="https://www.youtube.com/watch?v=KI3INCiyst8&t=905s">Introduction to Blockchain by TZAPAC</a>, official industry partner of <a href="https://noisg.comp.nus.edu.sg/noi/">National Olympiad in Informatics 2022</a>. 

## Organisers

<section class="organisers">
    {% for organiser in site.data.organisers %}
    <a href="{{ organiser.url }}">
        <img src="{{ site.baseurl }}/assets/img/{{ organiser.img }}" title="{{ organiser.title }}" />
    </a>
    {% endfor %}
</section>

## Partners

<section class="organisers">
    {% for partner in site.data.partners %}
    <a href="{{ partner.url }}">
        <img src="{{ site.baseurl }}/assets/img/{{ partner.img }}" title="{{ partner.title }}" />
    </a>
    {% endfor %}
</section>

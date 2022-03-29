---
layout: default
published: true
---

<br/><br/><br/><br/>

<section class="jumbo">
    <div class="main-div">
        <h1>
            {{ site.title }}<br>
            <span class="huge">2022</span>
        </h1>
	<p>
        <a class="btn brand" href="{{ site.baseurl }}/about/about-us/">Learn about BuildingBloCS</a>
	</p>
	    <h2>Other external programmes</h2>
	    <p><a href="https://summit.fossasia.org/">FOSSASIA Summit</a> is happening online 7 - 9 April 2022! Join the <a href="https://summit.fossasia.org/cloud">FOSSASIA Summit 2022 Cloud Skills Challenge!</a></p>
	    <p><a href="https://www.teensinai.com/iwdhack2022/">Teens in AI are running their 5th Global Hackathon to celebrate International Women’s Day!</a></p>
	    <p><a href="https://codingcompetitions.withgoogle.com/kickstart">Google Kickstart</a> registration is open!</p>
	    <p><a href="https://for.edu.sg/bebrasdrctds">Bebras, DrCT and NM High School Data Science assessment/contests</a> are free for students in Singapore schools!</p> 
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
</section>

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

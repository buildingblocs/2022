---
layout: default
published: true
permalink: /
lang: en
---

<section class="jumbo">
    <div class="main-div">
        <h1>{{ site.title }} June Conference</h1>
        <h1><span class="huge">2022</span></h1>
        <h4>Thursday 2 June - Saturday 4 June</h4>
        <h4>NUS School of Computing / Online</h4>
	    <h2><a class="btn" href="https://forms.gle/nRpQHPDduMHhZ9f37">Sign Up Main Conference Now!</a></h2>
	    <h3><a class="btn" href="https://forms.gle/4CVv2XUGN2DkT1fD8">Sign Up for Pre-Event Now!</a></h3>
	    <h4><a class="btn" href="{{ site.baseurl }}/events/june-conference/">Find Out More!</a></h4>
    </div>
</section>
<br><br><br><br>

## Theme: Computational Thinking, AI and Blockchain Education

With the increasing importance of Computing education and AI literacy globally as well as disruptive emerging blockchain technologies, this year's focus areas will be on Computational Thinking, Artificial Intelligence and Blockchain Education!

We are proud to partner with <a href="https://aisingapore.org/">AI Singapore</a> again in their new <a href="https://aisingapore.org/student-outreach-programme/">AI Student Outreach Programme</a> which encourages students to form Student User Groups (SUG) to promote AI literacy and experiment with our open-source AI tools ‘AI BRICKS’ to develop solutions for their schools and real-world needs.

Learn about <a href="https://www.youtube.com/watch?v=KI3INCiyst8&t=905s">Introduction to Blockchain</a> and <a href="https://www.youtube.com/watch?v=kde1nxLN43w&t=382s">Introduction to NFTs</a> by <a href="https://www.tzapac.com/">TZAPAC</a>, official industry partner of <a href="https://noisg.comp.nus.edu.sg/noi/">National Olympiad in Informatics 2022</a>. 

## Schedule

This year, BuildingBloCS' main June Conference will be held over 3 days in a hybrid manner! Please refer to the schedule below for more details:

{% for day in site.data.schedule %}
{% if site.data.schedule.size > 1 %}<h2>Day {{ day.day }}</h2>{% endif %}
<table width="80%">
    {% for activity in day.activities %}
    <tr>
        <td>{{ activity.time }}</td>
        <td width="80%">{{ activity.title }}</td>
    </tr>
    {% endfor %}
</table>
{% endfor %}

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

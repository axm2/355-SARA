# <span dir="ltr">Internet and Web Technologies (CSCI 355)</span>

# <span dir="ltr">Fall 2019</span>

**<span dir="ltr">Term Project: Phases 1 and 2</span>**

<span dir="ltr"></span>

> **<span dir="ltr">Introduction:</span>**

<span dir="ltr"></span>

<span dir="ltr">The project for the Fall 2019 semester is to build a
website containing a “Search And Reporting Application” (SARA). The
project will be implemented in three phases. The first two are to be
completed individually. The third - to be described in a separate
document - will generally require working in groups, with a recommended
group size of 4 students.</span>

<span dir="ltr"></span>

> **<span dir="ltr">Overview:</span>**

<span dir="ltr"></span>

  - > <span dir="ltr">**Phase 1**: Create a website which will be used
    > to house SARA, as well as other pertinent information (see
    > “Website/Homepage” below).</span>

  - > <span dir="ltr">**Phase 2**: Display search results previously
    > stored in files of type CSV, JSON, and XML formats; also display
    > search results obtained from using the Google Search API (see e.g.
    > [<span class="underline">https://developers.google.com/custom-search/v1/overview</span>](https://developers.google.com/custom-search/v1/overview))</span>

  - > <span dir="ltr">**Phase 3**: Display search results from your own
    > search engine which indexes the entire content of webpages.
    > (Details about the search engine will be provided later in the
    > semesters when we discuss databases and server-side programming.)
    > Administration screens related to this search engine will also be
    > needed.</span>

<span dir="ltr"></span>

# <span dir="ltr">Website/Homepage:</span>

<span dir="ltr"></span>

<span dir="ltr">The home page should have at least the following four
high-level menu options.</span>

<span dir="ltr"></span>

  - > <span dir="ltr">**Course**, with a submenu items pointing to our
    > course Zybook, TopHat, Google Drive, w3schools.com, and
    > optionally, other resources relevant to our course.</span>

  - > <span dir="ltr">**Search** – with submenu items to the various
    > search modes specified in the Overview. This will obviously be the
    > most important functional area of the site.</span>

  - > <span dir="ltr">**Browser** – with five submenu items respectively
    > communicating the following attributes</span>
    
      - > <span dir="ltr">Navigator - appName, product, appVersion,
        > userAgent, platform, language</span>
    
      - > <span dir="ltr">Window - inherHeight, innerWidth</span>
    
      - > <span dir="ltr">Screen - width, height, availWidth,
        > availHeight, colorDepth, pixelDepth</span>
    
      - > <span dir="ltr">Location - href, hostname, pathname,
        > protocol</span>
    
      - > <span dir="ltr">Geolocation - Latitude, Longitude</span>

> <span dir="ltr">See
> [<span class="underline">https://www.w3schools.com/js/</span>](https://www.w3schools.com/js/)
> and scroll down to “JS Browser BOM” in left nav-bar to get ideas as
> well as relevant code snippets.</span>

  - > <span dir="ltr">**About** – with submenu items to descriptions of
    > the developer of the page (i.e. you, the student) and a “Contact
    > Us” to contact you by e-mail. (If you don’t want your real email
    > posted, you can create a Mailinator or other emailing alias system
    > that will forward to your real email.)</span>

<span dir="ltr"></span>

# <span dir="ltr">Responsive Web Design:</span>

<span dir="ltr"></span>

<span dir="ltr">The website should use “responsive web design” (RWD) –
so that it can be easily viewed on mobile devices, as well as on larger
screens such as laptops and desktops.</span>

<span dir="ltr"></span>

<span dir="ltr">Here are some helpful links with regards to menus
generally and responsive ones in particular:</span>

<span dir="ltr"></span>

<span dir="ltr">[<span class="underline">https://www.w3schools.com/css/css\_navbar.asp</span>](https://www.w3schools.com/css/css_navbar.asp)
[<span class="underline">https://www.w3schools.com/howto/howto\_js\_topnav\_responsive.asp</span>](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp)
[<span class="underline">https://getbootstrap.com/docs/4.0/components/navs/</span>](https://getbootstrap.com/docs/4.0/components/navs/)
[<span class="underline">https://getbootstrap.com/docs/4.0/components/navbar/</span>](https://getbootstrap.com/docs/4.0/components/navbar/)</span>

<span dir="ltr"></span>

# <span dir="ltr">Read, Search, and Write:</span>

<span dir="ltr"></span>

<span dir="ltr">The site should support reading in files of type CSV,
JSON, and XML that contain the title, description, and URL of websites.
(Sample files will be provided.)</span>

<span dir="ltr"></span>

<span dir="ltr">The site should also allow the entry of a search term in
a search box, pass that to the Google search engine. Google will provide
results in JSON format, which should be read and displayed as they were
when reading directly from a JSON file.</span>

<span dir="ltr"> </span>

<span dir="ltr">Regardless of the source of the search results (i.e.
file, Google API, or custom search engine) – the presentation styling
should be the same. This should all be controlled using an external
stylesheet (CSS).</span>

<span dir="ltr"></span>

<span dir="ltr">In addition, each displayed search result should have a
checkbox next to it, and users should be able to save whichever search
results they have checked to any of the three file types mentioned
above. (The standard “Select All” and “Deselect All” options should be
provided.) This write feature should be available across all sources of
search results.</span>

# <span dir="ltr"></span>

# <span dir="ltr">Scoring and Due Dates:</span>

<span dir="ltr"></span>

<span dir="ltr">The full project is 25% of your grade, with a breakdown
as follows</span>

  - > <span dir="ltr">Phase 1: 5%, due October 3 (1% reduction per day
    > late)</span>

  - > <span dir="ltr">Phase 2: 10%, due October 24 (1% reduction per day
    > late)</span>

  - > <span dir="ltr">Phase 3: 10%, due December 16-17 (you will need to
    > present your software)</span>

<span dir="ltr"></span>

# <span dir="ltr">Hosting:</span>

<span dir="ltr"></span>

<span dir="ltr">Each student will need a home page in their Venus
account, or another web-accessible server of their choosing, to serve as
their course dashboard for the various deliverables mentioned above. If
you are using Venus, see the instructions in this section. For other
hosting options, you will need to adapt these instructions to your
hosting service.</span>

<span dir="ltr"></span>

<span dir="ltr"><span class="underline">Step 1: Login to the account on
Venus.</span></span>

<span dir="ltr"></span>

<span dir="ltr">(For remote access, Windows-users will generally use SSH
(see
[<span class="underline">https://www.ssh.com/ssh/download/</span>](https://www.ssh.com/ssh/download/))
while Mac-users will generally use Terminal.)</span>

<span dir="ltr"></span>

<span dir="ltr">These are the connection credentials:</span>

  - > <span dir="ltr">host-name: mars.cs.qc.cuny.edu</span>

  - > <span dir="ltr">user-name: LLFFNNNN</span>

  - > <span dir="ltr">password: the full eight digits of your CUNYFirst
    > Id</span>

<span dir="ltr">(where LL = first two letters of your last name, FF =
first two letters of first name, NNNN = last four digits of CUNYFirst
Id)</span>

<span dir="ltr"></span>

<span dir="ltr"><span class="underline">Step 2: Create and set
permissions on the relevant directories</span></span>

<span dir="ltr">Grant access to the root with the command:</span>

<span dir="ltr">$ chmod 755 $HOME</span>

<span dir="ltr">Create a new directory and grant access with the
commands</span>

<span dir="ltr">$ mkdir public\_html</span>

<span dir="ltr">$ chmod 755 public\_html</span>

<span dir="ltr">Switch to the public\_html directory, create a
subdirectory “cs355” (lowercase “cs”) for our course, and set
permissions with the commands:</span>

<span dir="ltr">$ cd public\_html</span>

<span dir="ltr">$ mkdir cs355</span>

<span dir="ltr">$ chmod 755 cs355</span>

<span dir="ltr">$ cd cs355</span>

<span dir="ltr">You can use “ls –l” (that is: el es minus el) to see the
file/folders and their permissions.</span>

<span dir="ltr"><span class="underline"> Step 3: Create the homepage
placeholder</span></span>

<span dir="ltr">Open an editor of your choice Paste in this text</span>

<span dir="ltr">\<\!DOCTYPE html\></span>

<span dir="ltr">\<html\></span>

<span dir="ltr">\<title\>CS 355 Home Page\</title\></span>

<span dir="ltr">\<body\></span>

<span dir="ltr">\<h1\>This is my home page for CS 355\</h1\></span>

<span dir="ltr">\</body\></span>

<span dir="ltr">\</html\></span>

<span dir="ltr">Save the file as “index.html” (all lowercase)</span>

<span dir="ltr">If you are editing on your own computer, upload this
file to the cs355 directory created in Step 3. Change the permissions on
this file too:</span>

<span dir="ltr">$ chmod 755 index.html</span>

<span dir="ltr"><span class="underline">Step 4: Test your
webpage</span></span>

<span dir="ltr">Open a browser of your choice</span>

<span dir="ltr">Type
[<span class="underline">http://venus.cs.qc.cuny.edu/\~LLDDNNNN/cs355/</span>](http://venus.cs.qc.cuny.edu/%7ELLDDNNNN/cs355/)</span>
<span dir="ltr"> (where LLDDNNNN is as defined in Step 1) You should see
your homepage.</span>

<span dir="ltr">If you get an error about access/permissions, there is
probably an issue with what happened in Step 2.</span>

**<span dir="ltr">See also the instructions located at
[<span class="underline">https://venus.cs.qc.cuny.edu/\~xiuyi/</span>](https://venus.cs.qc.cuny.edu/~xiuyi/)</span>**  
<span dir="ltr"></span>

<span dir="ltr"></span>

**<span dir="ltr">Developer Checklist</span>**

<table>
<thead>
<tr class="header">
<th><span dir="ltr"><strong>All Phases</strong></span></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><span dir="ltr">Hosted on a server (Venus or other)</span></td>
</tr>
<tr class="even">
<td><span dir="ltr">Responsive Web Design (mobile and desktop friendly)</span></td>
</tr>
<tr class="odd">
<td><span dir="ltr"><strong>Phase 1</strong></span></td>
</tr>
<tr class="even">
<td><p><span dir="ltr">Course Menu, links to</span></p>
<ul>
<li><blockquote>
<p><span dir="ltr">Zybook </span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">TopHat</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Course Google Drive</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">W3Schools </span></p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td><p><span dir="ltr">About Menu, links to</span></p>
<ul>
<li><blockquote>
<p><span dir="ltr">Developers</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Contact Us (sends e-mail)</span></p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td><p><span dir="ltr">Browser Menu, links to</span></p>
<ul>
<li><blockquote>
<p><span dir="ltr">Navigator - appName, product, appVersion, userAgent, platform, language </span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Window - inherHeight, innerWidth </span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Screen - width, height, availWidth, availHeight, colorDepth, pixelDepth </span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Location - href, hostname, pathname, protocol </span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Geolocation - latitude, longitude</span></p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td><span dir="ltr"><strong>Phase 2</strong></span></td>
</tr>
<tr class="even">
<td><p><span dir="ltr">Search Menu: From File</span></p>
<ul>
<li><blockquote>
<p><span dir="ltr">Uses file upload dialog box</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Reads JSON file</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Reads XML file</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Reads CSV file</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Displays contents as search results, clickable URL</span></p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td><p><span dir="ltr">Search Menu: Google API</span></p>
<ul>
<li><blockquote>
<p><span dir="ltr">Retrieves results from Google API</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Results are not limited to searching just one website</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Displays results using same styling as From File</span></p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td><p><span dir="ltr">Save Results (applies to From File and Google API)</span></p>
<ul>
<li><blockquote>
<p><span dir="ltr">Same functionality available for both From File and Google API</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Checkbox appears next to each search result</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Select All / Deselect All buttons (or links) will check or uncheck the list of search items</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Save checked results as JSON</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Save checked results as XML</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Save checked results as CSV</span></p>
</blockquote></li>
<li><blockquote>
<p><span dir="ltr">Ability to choose name of file (Save As)</span></p>
</blockquote></li>
</ul></td>
</tr>
<tr class="odd">
<td><span dir="ltr"><strong>Phase 3</strong></span></td>
</tr>
<tr class="even">
<td><span dir="ltr">Requirements will be outlined in a separate document</span></td>
</tr>
</tbody>
</table>

<span dir="ltr"></span>

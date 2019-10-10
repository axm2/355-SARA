[Internet and Web Technologies (CSCI 355)]{dir="ltr"}
=====================================================

[Fall 2019]{dir="ltr"}
======================

**[Term Project: Phases 1 and 2]{dir="ltr"}**

[]{dir="ltr"}

> **[Introduction:]{dir="ltr"}**

[]{dir="ltr"}

[The project for the Fall 2019 semester is to build a website containing
a "Search And Reporting Application" (SARA). The project will be
implemented in three phases. The first two are to be completed
individually. The third - to be described in a separate document - will
generally require working in groups, with a recommended group size of 4
students.]{dir="ltr"}

[]{dir="ltr"}

> **[Overview:]{dir="ltr"}**

[]{dir="ltr"}

-   [**Phase 1**: Create a website which will be used to house SARA, as
    > well as other pertinent information (see "Website/Homepage"
    > below).]{dir="ltr"}

-   [**Phase 2**: Display search results previously stored in files of
    > type CSV, JSON, and XML formats; also display search results
    > obtained from using the Google Search API (see e.g.
    > [[https://developers.google.com/custom-search/v1/overview]{.underline}](https://developers.google.com/custom-search/v1/overview))]{dir="ltr"}

-   [**Phase 3**: Display search results from your own search engine
    > which indexes the entire content of webpages. (Details about the
    > search engine will be provided later in the semesters when we
    > discuss databases and server-side programming.) Administration
    > screens related to this search engine will also be
    > needed.]{dir="ltr"}

[]{dir="ltr"}

[Website/Homepage:]{dir="ltr"}
==============================

[]{dir="ltr"}

[The home page should have at least the following four high-level menu
options.]{dir="ltr"}

[]{dir="ltr"}

-   [**Course**, with a submenu items pointing to our course Zybook,
    > TopHat, Google Drive, w3schools.com, and optionally, other
    > resources relevant to our course.]{dir="ltr"}

-   [**Search** -- with submenu items to the various search modes
    > specified in the Overview. This will obviously be the most
    > important functional area of the site.]{dir="ltr"}

-   [**Browser** -- with five submenu items respectively communicating
    > the following attributes]{dir="ltr"}

    -   [Navigator - appName, product, appVersion, userAgent, platform,
        > language]{dir="ltr"}

    -   [Window - inherHeight, innerWidth]{dir="ltr"}

    -   [Screen - width, height, availWidth, availHeight, colorDepth,
        > pixelDepth]{dir="ltr"}

    -   [Location - href, hostname, pathname, protocol]{dir="ltr"}

    -   [Geolocation - Latitude, Longitude]{dir="ltr"}

> [See
> [[https://www.w3schools.com/js/]{.underline}](https://www.w3schools.com/js/)
> and scroll down to "JS Browser BOM" in left nav-bar to get ideas as
> well as relevant code snippets.]{dir="ltr"}

-   [**About** -- with submenu items to descriptions of the developer of
    > the page (i.e. you, the student) and a "Contact Us" to contact you
    > by e-mail. (If you don't want your real email posted, you can
    > create a Mailinator or other emailing alias system that will
    > forward to your real email.)]{dir="ltr"}

[]{dir="ltr"}

[Responsive Web Design:]{dir="ltr"}
===================================

[]{dir="ltr"}

[The website should use "responsive web design" (RWD) -- so that it can
be easily viewed on mobile devices, as well as on larger screens such as
laptops and desktops.]{dir="ltr"}

[]{dir="ltr"}

[Here are some helpful links with regards to menus generally and
responsive ones in particular:]{dir="ltr"}

[]{dir="ltr"}

[[[https://www.w3schools.com/css/css\_navbar.asp]{.underline}](https://www.w3schools.com/css/css_navbar.asp)
[[https://www.w3schools.com/howto/howto\_js\_topnav\_responsive.asp]{.underline}](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp)
[[https://getbootstrap.com/docs/4.0/components/navs/]{.underline}](https://getbootstrap.com/docs/4.0/components/navs/)
[[https://getbootstrap.com/docs/4.0/components/navbar/]{.underline}](https://getbootstrap.com/docs/4.0/components/navbar/)]{dir="ltr"}

[]{dir="ltr"}

[Read, Search, and Write:]{dir="ltr"}
=====================================

[]{dir="ltr"}

[The site should support reading in files of type CSV, JSON, and XML
that contain the title, description, and URL of websites. (Sample files
will be provided.)]{dir="ltr"}

[]{dir="ltr"}

[The site should also allow the entry of a search term in a search box,
pass that to the Google search engine. Google will provide results in
JSON format, which should be read and displayed as they were when
reading directly from a JSON file.]{dir="ltr"}

[ ]{dir="ltr"}

[Regardless of the source of the search results (i.e. file, Google API,
or custom search engine) -- the presentation styling should be the same.
This should all be controlled using an external stylesheet
(CSS).]{dir="ltr"}

[]{dir="ltr"}

[In addition, each displayed search result should have a checkbox next
to it, and users should be able to save whichever search results they
have checked to any of the three file types mentioned above. (The
standard "Select All" and "Deselect All" options should be provided.)
This write feature should be available across all sources of search
results.]{dir="ltr"}

[]{dir="ltr"}
=============

[Scoring and Due Dates:]{dir="ltr"}
===================================

[]{dir="ltr"}

[The full project is 25% of your grade, with a breakdown as
follows]{dir="ltr"}

-   [Phase 1: 5%, due October 3 (1% reduction per day late)]{dir="ltr"}

-   [Phase 2: 10%, due October 24 (1% reduction per day
    > late)]{dir="ltr"}

-   [Phase 3: 10%, due December 16-17 (you will need to present your
    > software)]{dir="ltr"}

[]{dir="ltr"}

[Hosting:]{dir="ltr"}
=====================

[]{dir="ltr"}

[Each student will need a home page in their Venus account, or another
web-accessible server of their choosing, to serve as their course
dashboard for the various deliverables mentioned above. If you are using
Venus, see the instructions in this section. For other hosting options,
you will need to adapt these instructions to your hosting
service.]{dir="ltr"}

[]{dir="ltr"}

[[Step 1: Login to the account on Venus.]{.underline}]{dir="ltr"}

[]{dir="ltr"}

[(For remote access, Windows-users will generally use SSH (see
[[https://www.ssh.com/ssh/download/]{.underline}](https://www.ssh.com/ssh/download/))
while Mac-users will generally use Terminal.)]{dir="ltr"}

[]{dir="ltr"}

[These are the connection credentials:]{dir="ltr"}

-   [host-name: mars.cs.qc.cuny.edu]{dir="ltr"}

-   [user-name: LLFFNNNN]{dir="ltr"}

-   [password: the full eight digits of your CUNYFirst Id]{dir="ltr"}

[(where LL = first two letters of your last name, FF = first two letters
of first name, NNNN = last four digits of CUNYFirst Id)]{dir="ltr"}

[]{dir="ltr"}

[[Step 2: Create and set permissions on the relevant
directories]{.underline}]{dir="ltr"}

[Grant access to the root with the command:]{dir="ltr"}

[\$ chmod 755 \$HOME]{dir="ltr"}

[Create a new directory and grant access with the commands]{dir="ltr"}

[\$ mkdir public\_html]{dir="ltr"}

[\$ chmod 755 public\_html]{dir="ltr"}

[Switch to the public\_html directory, create a subdirectory "cs355"
(lowercase "cs") for our course, and set permissions with the
commands:]{dir="ltr"}

[\$ cd public\_html]{dir="ltr"}

[\$ mkdir cs355]{dir="ltr"}

[\$ chmod 755 cs355]{dir="ltr"}

[\$ cd cs355]{dir="ltr"}

[You can use "ls --l" (that is: el es minus el) to see the file/folders
and their permissions.]{dir="ltr"}

[[ Step 3: Create the homepage placeholder]{.underline}]{dir="ltr"}

[Open an editor of your choice Paste in this text]{dir="ltr"}

[\<!DOCTYPE html\>]{dir="ltr"}

[\<html\>]{dir="ltr"}

[\<title\>CS 355 Home Page\</title\>]{dir="ltr"}

[\<body\>]{dir="ltr"}

[\<h1\>This is my home page for CS 355\</h1\>]{dir="ltr"}

[\</body\>]{dir="ltr"}

[\</html\>]{dir="ltr"}

[Save the file as "index.html" (all lowercase)]{dir="ltr"}

[If you are editing on your own computer, upload this file to the cs355
directory created in Step 3. Change the permissions on this file
too:]{dir="ltr"}

[\$ chmod 755 index.html]{dir="ltr"}

[[Step 4: Test your webpage]{.underline}]{dir="ltr"}

[Open a browser of your choice]{dir="ltr"}

[Type
[[http://venus.cs.qc.cuny.edu/\~LLDDNNNN/cs355/]{.underline}](http://venus.cs.qc.cuny.edu/%7ELLDDNNNN/cs355/)]{dir="ltr"}
[ (where LLDDNNNN is as defined in Step 1) You should see your
homepage.]{dir="ltr"}

[If you get an error about access/permissions, there is probably an
issue with what happened in Step 2.]{dir="ltr"}

**[See also the instructions located at
[[https://venus.cs.qc.cuny.edu/\~xiuyi/]{.underline}](https://venus.cs.qc.cuny.edu/~xiuyi/)]{dir="ltr"}**\
[]{dir="ltr"}

[]{dir="ltr"}

**[Developer Checklist]{dir="ltr"}**

+-----------------------------------------------------------------------+
| [**All Phases**]{dir="ltr"}                                           |
+=======================================================================+
| [Hosted on a server (Venus or other)]{dir="ltr"}                      |
+-----------------------------------------------------------------------+
| [Responsive Web Design (mobile and desktop friendly)]{dir="ltr"}      |
+-----------------------------------------------------------------------+
| [**Phase 1**]{dir="ltr"}                                              |
+-----------------------------------------------------------------------+
| [Course Menu, links to]{dir="ltr"}                                    |
|                                                                       |
| -   [Zybook ]{dir="ltr"}                                              |
|                                                                       |
| -   [TopHat]{dir="ltr"}                                               |
|                                                                       |
| -   [Course Google Drive]{dir="ltr"}                                  |
|                                                                       |
| -   [W3Schools ]{dir="ltr"}                                           |
+-----------------------------------------------------------------------+
| [About Menu, links to]{dir="ltr"}                                     |
|                                                                       |
| -   [Developers]{dir="ltr"}                                           |
|                                                                       |
| -   [Contact Us (sends e-mail)]{dir="ltr"}                            |
+-----------------------------------------------------------------------+
| [Browser Menu, links to]{dir="ltr"}                                   |
|                                                                       |
| -   [Navigator - appName, product, appVersion, userAgent, platform,   |
|     > language ]{dir="ltr"}                                           |
|                                                                       |
| -   [Window - inherHeight, innerWidth ]{dir="ltr"}                    |
|                                                                       |
| -   [Screen - width, height, availWidth, availHeight, colorDepth,     |
|     > pixelDepth ]{dir="ltr"}                                         |
|                                                                       |
| -   [Location - href, hostname, pathname, protocol ]{dir="ltr"}       |
|                                                                       |
| -   [Geolocation - latitude, longitude]{dir="ltr"}                    |
+-----------------------------------------------------------------------+
| [**Phase 2**]{dir="ltr"}                                              |
+-----------------------------------------------------------------------+
| [Search Menu: From File]{dir="ltr"}                                   |
|                                                                       |
| -   [Uses file upload dialog box]{dir="ltr"}                          |
|                                                                       |
| -   [Reads JSON file]{dir="ltr"}                                      |
|                                                                       |
| -   [Reads XML file]{dir="ltr"}                                       |
|                                                                       |
| -   [Reads CSV file]{dir="ltr"}                                       |
|                                                                       |
| -   [Displays contents as search results, clickable URL]{dir="ltr"}   |
+-----------------------------------------------------------------------+
| [Search Menu: Google API]{dir="ltr"}                                  |
|                                                                       |
| -   [Retrieves results from Google API]{dir="ltr"}                    |
|                                                                       |
| -   [Results are not limited to searching just one                    |
|     > website]{dir="ltr"}                                             |
|                                                                       |
| -   [Displays results using same styling as From File]{dir="ltr"}     |
+-----------------------------------------------------------------------+
| [Save Results (applies to From File and Google API)]{dir="ltr"}       |
|                                                                       |
| -   [Same functionality available for both From File and Google       |
|     > API]{dir="ltr"}                                                 |
|                                                                       |
| -   [Checkbox appears next to each search result]{dir="ltr"}          |
|                                                                       |
| -   [Select All / Deselect All buttons (or links) will check or       |
|     > uncheck the list of search items]{dir="ltr"}                    |
|                                                                       |
| -   [Save checked results as JSON]{dir="ltr"}                         |
|                                                                       |
| -   [Save checked results as XML]{dir="ltr"}                          |
|                                                                       |
| -   [Save checked results as CSV]{dir="ltr"}                          |
|                                                                       |
| -   [Ability to choose name of file (Save As)]{dir="ltr"}             |
+-----------------------------------------------------------------------+
| [**Phase 3**]{dir="ltr"}                                              |
+-----------------------------------------------------------------------+
| [Requirements will be outlined in a separate document]{dir="ltr"}     |
+-----------------------------------------------------------------------+

[]{dir="ltr"}

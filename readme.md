<p align="center"><img src="https://user-images.githubusercontent.com/459713/53930194-77a64680-405e-11e9-870c-f0f15d039230.png" height="80px" width="80px" alt=""></p>

<h1 align="center">octofiles</h1>

<blockquote>
  <p align="center">Browser Extension to easily upload/manage files on GitHub</p>
</blockquote>

**octofiles** takes advantage of GitHub's existing issue file upload capabilities... just makes it waaaay easier to use & copy/paste post-upload. You can also keep track of and remove files utilizing the local extension storage.

<img src="https://user-images.githubusercontent.com/459713/56985732-044d1c80-6b57-11e9-86a4-04efe1dd5d7d.gif" width="100%" height="auto">

# Install
- [Install the Chrome Extension](https://chrome.google.com/webstore/detail/octofiles/dbbinlnmlpconpmbecdekkpbhiibhghi)
- [Install the Firefox Add-on](https://addons.mozilla.org/en-US/developers/addon/octofiles/)

# FAQ
- **Q. Are there any requirements?**
  - You must have a GitHub account
- **Q. How long do files live for?**
  - Forever (or as long as GitHub is around).
- **Q. Who can access these files?**
  - Anyone that has the link. All files uploaded to issues/prs are, essentially, publically available, even against private repos ([read more here](https://help.github.com/en/articles/file-attachments-on-issues-and-pull-requests))
- **Q. How big can the files be?**
  - **10MB** for image files and **25MB** for everything else.
- **Q. What file types are supported?**
  - PNG (.png)
  - GIF (.gif)
  - JPEG (.jpg, .jpeg)
  - SVG (.svg)
  - Log files (.log)
  - Microsoft Word (.docx), Powerpoint (.pptx), and Excel (.xlsx) documents
  - Text files (.txt)
  - PDFs (.pdf)
  - ZIP (.zip, .gz)
  - Video (.mp4, .mov, .webm)
- **Q. Are there any other limitations?**
  - The web extension stores references to previous uploaded files for listing/management purposes later on via [extension storage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) which has a limit of **5MB** before there may be data loss. Theoretically, you'll never hit this limit and experience any issues.

# BuildingBloCS 2022 Website

Welcome! This is the Github page for the 2022 version of the [BuildingBloCS Website](https://buildingblocs.sg/2022/).

Table of Contents
-------------
- [1. Installation](#1-installation)
    - [1.1 Installing Project](#11-installing-project)
    - [1.2 Installing Dependencies](#12-installing-dependencies)
- [2. Configuration](#2-configuration)
    - [2.1 Folder Structure](#21-folder-structure)
        - [2.1.1 Example Folder Structure](#211-example-folder-structure)
        - [2.1.2 Subpages](#212-subpages)
        - [2.1.3 Main Configuration Files](#213-main-configuration-files)
        - [2.1.4 Other Files](#214-other-files)
- [3. Usage](#3-usage)
    - [3.1 Upgrading Subdependencies](#31-upgrading-subdependencies)
    - [3.2 Building CSS from SASS](#32-building-css-from-sass)
    - [3.3 Generate Website](#33-generate-website)
- [4. Deployment](#4-deployment)
    - [4.1 Making Pull Requests](#41-making-pull-requests)
    - [4.2 Changing buildingblocs.sg Repository](#42-changing-buildingblocssg-repository)





## 1. Installation

### 1.1 Installing Project

Go to this year's version of the BuildingBloCS page on Github [here](https://github.com/buildingblocs/2022). At the top of the page, click on the big green button titled "Code". From there, select your preferred method of installation.

### 1.2 Installing Dependencies

The website makes use of the following:

1. [Git](https://git-scm.com/downloads)
2. [Jekyll](https://jekyllrb.com/docs/installation/)
3. [Node.js](https://nodejs.org/)
4. [Yarn](https://yarnpkg.com/)
5. [RubyGems](https://rubygems.org/pages/download)
6. [Polyglot](https://github.com/untra/polyglot)
7. [Bundler](https://bundler.io/v2.3/)

> Yarn is the selected package manager for our project. In the base folder of the project, run `yarn install` to install all subdependencies. 
```
yarn install
```

> After installing RubyGems and Bundler, install the necessary gems as per the instructions [here](https://bundler.io/v2.3/bundle_install.html) by doing ```bundle install```
```
bundle install
```





## 2. Configuration

### 2.1 Folder Structure

Visit the [Jekyll docs](https://jekyllrb.com/docs/) for more information on the [directory structure](https://jekyllrb.com/docs/structure/).

#### 2.1.1 Example Folder Structure

The following is an example of the folder structure in the root folder.
```
.
├── about
├── assets
├── competitions
├── _config.yml
├── _data
├── events
├── Gemfile
├── Gemfile.lock
├── Gruntfile.js
├── _includes
├── index-en.md
├── index-jp.md
├── index-zh.md
├── join-us
├── _layouts
├── node_modules
├── package.json
├── past-years
├── README.md
├── workshops
└── yarn.lock
```

#### 2.1.2 Subpages

To create a subpage that is viewable on the website, create a folder in the home base directory and place an ```index.md``` file containing the relevant info. For example, see the ```about``` page below.
```
about
├── about-us
│   ├── index-en.md
│   ├── index-jp.md
│   └── index-zh.md
├── buildingblocs-youtube
│   ├── index-en.md
│   ├── index-jp.md
│   └── index-zh.md
├── contact
│   ├── index-en.md
│   ├── index-jp.md
│   └── index-zh.md
└── partners
    ├── index-en.md
    ├── index-jp.md
    └── index-zh.md
```
> As per our internationalisation efforts, there <b>should</b> be a separate markdown file for each language specified in ```_config.yml```. If one is not provided, the page will still work due to [this](https://github.com/untra/polyglot#fallback-language-support).

#### 2.1.3 Main Configuration Files

These files are used in other files as templates, or are core to the functionality of the website.
```
.
├── _data
│   ├── organisers.yml
│   └── partners.yml
├── _includes
│   ├── footer.html
│   └── navigation.html
├── _layouts
│   └── default.html
├── assets
│   ├── css
│   │   └── ...
│   ├── img
│   │   └── ...
│   ├── js
│   │   └── ...
│   └── sass
│       └── ...
└──  _config.yml
```

Note that under ```assets```, only edit the respective SASS files (```.scss```) as the SASS files will be used to generate the CSS file ```style.css```, and any changes made to ```style.css``` will be overwritten on every update.

For more information, visit the [SASS website](https://sass-lang.com/).


#### 2.1.4 Other Files 

The following files should not be touched unless you know what you are doing.
```
.
├── node_modules
├── .gitignore
├── .gitmodules
├── Gemfile
├── Gemfile.lock
├── Gruntfile.js
├── package.json
└── yarn.lock
```





## 3. Usage

### 3.1 Upgrading Subdependencies

Upgrading to latest compatible version. **This is strongly recommended.**
```
yarn upgrade --latest --caret
```

To upgrade all dependencies to the latest version. **This is not recommended.**
```
yarn upgrade --latest
```

### 3.2 Building CSS from SASS

#### Building CSS from SASS

Only required if you are modifying stylesheets. Start `grunt` (tool to build `.scss` to `.css`) and make it watch for file changes:

```
yarn build watch
```

If you want to just build and exit, do:

```
yarn build
```

### 3.3 Generate Website

Jekyll is used to run a localised version of the website, that allows you to easily view the changes you make. Run `jekyll serve` in your project folder and type `http://localhost:4000` into your web browser of choice to view the website.

```
bundle exec jekyll serve
```

We strongly encourage local development and making pull requests as editing via the online environment could be messy and hard to organise. Thank you!





## 4. Deployment

### 4.1 Making Pull Requests

To submit your changes, please either commit changes to a [different branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) or fork the repo and [Create a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). Use the template in the `.template` folder for making a Pull Request. 

### 4.2 Changing buildingblocs.sg Repository

To make this the site that visiting [buildingblocs.sg](https://buildingblocs.sg) redirects to, see [this Repository](https://github.com/buildingblocs/buildingblocs.github.io).
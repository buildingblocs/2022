
# BuildingBloCS 2022 Website

## **MAINTAINING**

---

### **Application Requirements**


> Git will be used to install the project folder. Note that while downloading via zip file may work, Git is the preferred option. For installation via ZIP archive, view [Installation via ZIP](#installation-via-zip) below.

1. [Git](https://git-scm.com/downloads)
2. [Jekyll](https://jekyllrb.com/docs/installation/)
3. [Node.js](https://nodejs.org/)
4. [Yarn](https://yarnpkg.com/)

---

### **Installing Project Files**

---

#### Installation via HTTPS

```
git clone https://github.com/buildingblocs/2022.git
```

#### Installation via SSH

```
git clone git@github.com:buildingblocs/2022.git
```

#### Installation via GitHub CLI

```
gh repo clone buildingblocs/2022
```

#### Installation via ZIP

> Download the ZIP archive and extract it to a folder. This folder will now be your working directory. Simply open this folder in your favourite code editor and get working!

---

### **Installing project dependencies:**

---

> Yarn is the selected package manager for our project. Run `yarn install` to install all project dependencies. 


```
yarn install
```

#### Building CSS from SASS

> Only required if you are modifying stylesheets. Start `grunt` (tool to build `.scss` to `.css`) and make it watch for file changes:

```
yarn build watch
```

If you want to just build and exit, do:

```
yarn build
```
---

### **Upgrading Dependencies**

---

#### Upgrading to latest compatible version. **This is strongly recommended.**

```
yarn upgrade --latest --caret
```

#### To upgrade all dependencies to the latest version. **This is not recommended.**

```
yarn upgrade --latest
```

---

### **View Website Locally**

---

> Jekyll is used to run a localised version of the website, that allows you to easily view the changes you make. Run `jekyll serve` in your project folder and type `http://localhost:4000` into your web browser of choice to view the website.

```
jekyll serve
```

Visit the [Jekyll docs](https://jekyllrb.com/docs/) for more information on the [directory structure](https://jekyllrb.com/docs/structure/).

We strongly encourage local development and making pull requests as editing via the online environment could be messy and hard to organise. Thank you!

---

</br></br></br>

## **DEPLOYMENT**

---

### **Making pull requests**

---

To submit your changes, please either commit changes to a [different branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) or fork the repo and [Create a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). Use the template in the `.template` folder for making a Pull Request. 

</br>

---

### **Changing buildingblocs.sg Repo**

---

To make this the site that visiting [buildingblocs.sg](https://buildingblocs.sg) redirects to, see [this repo](https://github.com/buildingblocs/buildingblocs.github.io).

</br></br></br>

## **NOTE**

---

> **This server uses [SASS](https://sass-lang.com/), hence the `.scss` files can be found at `/assets/sass/`**
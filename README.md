<p><a href="" target="_blank" rel="noopener noreferrer"><img width=70% src="public/deep-neuron-logo.svg" alt="re-frame logo"></a></p>

## Deep Neuron

Description...

## 🚀 Get Started

#### Live instances

- Production: [TBA]() (latest [release (TBA)]())
- Preview: [TBA]() ([branch `main`)](https://github.com/deep-neuron-llc/deep_neuron_website))

#### 🐳 Compose

- TBA

## 🖥️ Application stack

- TBA

## 🔨 Development Setup Guide

#### Step 1: Pre-requisites

- Node.js on [Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04)/[Windows]([https://nodejs.org/dist/v20.17.0/](https://nodejs.org/en/blog/release/v22.18.0))
  - Preferred to install Node Version Manager (NVM) for [Ubuntu](https://tecadmin.net/how-to-install-nvm-on-ubuntu-22-04/)/[Windows](https://github.com/coreybutler/nvm-windows/releases).
  - Open a terminal and then type `nvm install 22.18.0` to install Node.js 22.18.0
  - Then type `nvm use 22.18.0` to use the Node.js v22.18.0 to install node packages
- Preferred IDE IntelliJ Ultimate [Ubuntu](https://www.golinuxcloud.com/install-maven-ubuntu/)/[Windows](https://www.jetbrains.com/de-de/idea/download/#section=windows)
- Git on [Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-22-04#installing-git-with-default-packages)/ [Windows](https://git-scm.com/downloads)
- (Optional) Github Desktop on [Ubuntu](https://www.linuxcapable.com/how-to-install-github-desktop-on-ubuntu-linux/)/[Windows](https://desktop.github.com/)

#### Step 2: Installation Guide

- Clone the repository using Github Desktop or use the Git clone command in the terminal:
  ```bash
  git clone https://github.com/deep-neuron-llc/deep_neuron_website.git
  ```
- Open the terminal and type the following command to install the node packages.
  ```bash
  npm ci
  ```
  - If you get an error, try typing the `npm install` or `npm install --force` command.
- Run the following command in the terminal to start the server.
  ```bash
  npm run dev
  ```
- Open the browser and go to the following URL.
  ```bash
  http://localhost:3000/
  ```

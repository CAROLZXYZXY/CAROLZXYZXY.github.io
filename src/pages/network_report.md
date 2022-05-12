---
title: "Network Report: A Structured Description for Network Datasets"
date: "2020-05-12"
author: "Carol"
path: "/report"
---

## Abstract 
The rapid development of network science and technologies depends on shareable datasets. Currently, there is no standard practice for reporting and sharing network datasets. Some network dataset providers only share links, while others provide some contexts or basic statistics. As a result, critical information may be unintentionally dropped, and network dataset consumers may misunderstand or overlook critical aspects. Inappropriately using a network dataset can lead to severe consequences (e.g., discrimination) especially when machine learning models on networks are deployed in high-stake domains. Challenges arise as networks are often used across different domains (e.g., network science, physics, etc) and have complex structures. To facilitate the communication between network dataset providers and consumers, we propose network report. A network report is a structured description that summarizes and contextualizes a network dataset. Network report extends the idea of dataset reports (e.g., Datasheets for Datasets) from prior work with network-specific descriptions of the non-i.i.d. nature, demographic information, network characteristics, etc. We hope network reports encourage transparency and accountability in network research and development across different fields.

[[Code]](https://drive.google.com/drive/folders/1oRM6x3gdnWjNcu7Sl_nq0BYCQF7CcG9X?usp=sharing)

## Supplemental materials
### Case Study 
#### 1. High School Contact Network

<section id="contact">
  <div>
    <iframe
    src="https://carolzxyzxy.github.io/assets/report/pokec_v2.pdf#toolbar=0&navpanes=0&scrollbar=0"
    frameBorder="0"
    scrolling="auto"
    height="600pt"
    width="100%"
></iframe>
  </div>
</section>

We use the high school contact network as an example of a social network. The network is created in the interdisciplinary SocioPatterns [1] project to study human contact behavior. 
The network report is shown in below. 
The network follows general characteristics of social networks: large triangle counts and clustering coefficient, power-law distribution of degrees, etc. 
Thus methods for analyzing social networks could be applied to this network. 
As the data is collected by wearable sensors that exchange ultra-low power  radio packets, the sensors may detect false positive contact if students' physical distance is close (e.g., deskmates). 
As a result, the network may be biased towards in-class contacts. 
Influence models and vaccination strategies developed for this dataset may not generalize to other datasets.
Furthermore, there are only 327 nodes in the network, but the average degree is > 1000. 
Network dataset consumers may consider data structures other than sparse matrices to speed up certain computations (e.g., eigenvalue decomposition).
Visualization researchers may be interested in developing specific techniques for such 'edge clutter' networks, as opposed to 'node clutter' networks such as Figure 1 (in the manuscript). 

#### 2. MOOC Action Network
<section id="mooc">
  <div>
    <iframe
    src="https://carolzxyzxy.github.io/assets/report/mooc_v2.pdf#toolbar=0&navpanes=0&scrollbar=0"
    frameBorder="0"
    scrolling="auto"
    height="600pt"
    width="100%"
></iframe>
  </div>
</section>
To show an example of a network report for an ML dataset, we use MOOC action network, which is built on top of KDD Cup 2015 [2]. 
This user action dataset represents the actions taken by users on a popular MOOC platform.
The primary task is edge classification, i.e., to predict if an edge is the last action before the student dropouts the class.
The network report is shown below. 
From the description of data split, network dataset consumers could get insights that edge classification should be conducted in an 'inductive learning' paradigm, as new students could be added to the network in validation and test sets. 
Thus transductive learning methods such as Deepwalk [3] could not be used in this task. 
Since all participants come from China, the model trained with this network may not be suitable for predicting dropout in other MOOC platforms outside China, because students in different countries may have different learning habits. 
As shown in the `Frequency of label' bar plot, the labels are pretty imbalanced, i.e., 1% versus 99%. 
Thus network dataset consumers could consider imbalanced classification techniques (e.g., under sampling the majority class) or one class classification methods when building models. 


### User Study
<section id="pokec">
  <div>
    <iframe
    src="ahttps://carolzxyzxy.github.io/assets/report/contact_v5.pdf#toolbar=0&navpanes=0&scrollbar=0"
    frameBorder="0"
    scrolling="auto"
    height="600pt"
    width="100%"
></iframe>
  </div>
</section>


## References
[1] http://www.sociopatterns.org/ \
[2] Kadam, Priti, Jayashree Palve, Kranti Kusale and Nikita Sankhe. “KDD CUP 2015- Predicting Dropouts in MOOC’S.” Imperial journal of interdisciplinary research 2 (2016): n. pag. \
[3] Perozzi, B., Al-Rfou, R., & Skiena, S. (2014). DeepWalk: online learning of social representations. Proceedings of the 20th ACM SIGKDD international conference on Knowledge discovery and data mining.


<!-- ### Header 3

Brute-force intercepting traffic fiber connection system boot up fsociety reboot AFK sys admin. Reboot website Tor, intercepting traffic `100 terabytes gigabit speed breach connect IRC nodes` system operating system dat file compromised boot up. Data center decrypt password network disconnect. Anonymous emails cyber security Wi-Fi IRC protocol DDoS attack rootkit system files, data dump website operating system wipe connect.

```css
/* PostCSS code by PrismJS */

pre {
  background: #1a1a1d;
  padding: 20px;
  border-radius: 8px;
  font-size: 1rem;
  overflow: auto;

  @media (--phone) {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  code {
    background: none !important;
    color: #ccc;
    padding: 0;
    font-size: inherit;

    .dark-theme & {
      color: inherit;
    }
  }
}
```

```js
// JS code by PrismJS

const menuTrigger = document.querySelector('.menu-trigger')
const menu = document.querySelector('.menu')
const mobileQuery = getComputedStyle(document.body).getPropertyValue('--phoneWidth')
const isMobile = () => window.matchMedia(mobileQuery).matches
const isMobileMenu = () => {
  menuTrigger.classList.toggle('hidden', !isMobile())
  menu.classList.toggle('hidden', isMobile())
}

isMobileMenu()

menuTrigger.addEventListener('click', () => menu.classList.toggle('hidden'))

window.addEventListener('resize', isMobileMenu)
```

```html
<section id="main">
  <div>
   <h1 id="title">{{ .Title }}</h1>
    {{ range .Pages }}
        {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
```

#### Header 4

Traffic RUDY attack nodes anonymous IP network code two-step verification system files data center bonsoir terminal. Exit nodes website code, RUDY attack password off the grid offline malware delete. Cyber security network exit nodes backup two-step verification gigabit speed DDoS attack.

- Fsociety delete malicious code nodes.
- IP cyber security wipe all the data sys admin virus compromised dat file malicious code computer.
- Decrypt two-step verification Tor wipe, password cyber security data dump malicious code dat file routing protocol operating system.
- Anonymous boot up website AFK.
  - Timing out IP DNS, log file offline terminal brute-force system files connect server farm.
  - Reboot sys admin worm log file wipe.

`youtube: xIBiJ_SzJTA`

Tor boot up backup anonymous bonsoir IRC website. Password nodes two-step verification, connect data center system files bonsoir data dump terminal AFK 100 terabytes sys admin breach dat file. Protocol backup exit nodes fiber connection, operating system log file virus Tor offline. Password data center two-step verification disconnect IRC terminal. Tor IRC cyber security AFK protocol traffic disconnect. Code exit nodes IRC cyber security nodes worm. -->

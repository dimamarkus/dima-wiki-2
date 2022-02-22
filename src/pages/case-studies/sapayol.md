---
category: Company
company: Sapayol
created: 2022-01-25T08:07:11-05:00
end_date: 2015-02
existing_team: false
featuredImage: /img/featured/coffee-banner.png
primary_role: ux-designer
roles: [design, frontend, backend, devops]
slug: sapayol
stack: [laravel, angular]
start_date: 2014-02
tags:
  - brewing
  - chemex
templateKey: case-study
thumb: /img/thumbs/brands/sapayol-thumb.png
title: Case Study Sapayol
tools: [sketch, html, css, react]
types: [responsive-website]
updated: 2022-02-22T05:55:09-05:00
url: https://sapayol.com
---

# Sapayol

## Case Study

### The Company

#### Ecommerce shop for custom jacket with custom needs

Sapayol is a high-end leather jacket manufacturer that needed an online shop. They specialize in bespoke, custom-tailored jackets and their shopping experience had to reflect the personal nature of each order and the luxury of the brand.

### The Challenge

For the customer, ordering an expensive item online requires a lot of trust. Our goal was to ensure that the customer felt comfortable and knew what to expect at every step of the process from their first visit to homepage, to the moment they try on the jacket and even beyond.

### The Team

Just me, reporting to the CEO + Founder.

### The Solutions

#### Showcase The Product

Sapayol are very proud of the quality of their leather and their process. That needed to be showcased clearly and vividly. We went with a fairly minimal aesthetic that really put the focus on the photos as well as mirrored the sleekness of the brand.

> Each photo across the site is a link directly to its high-res jpg source file. Foregoing lightboxes and other janky javascript zooming solutions not only allows for the most honest, familiar, accessible and consistent user experience across all devices.

#### Abandon The Cart

The target market was people looking to buy a jacket for themselves. Given the price point and the very personal nature of this process (which involves customizing the look and measuring your body) we decided to target customers that will be buying just a single jacket at a time. Hence, the traditional e-commerce retail shopping experience was not appropriate here.

The whole process was distilled down into 3 steps

1. Choose your look
2. Enter your fit
3. Add To Cart <-- unecessary
4. Checkout

Instead of 'adding to a cart' and forgetting about it, every visitor essentially creates a new order just by visiting a jacket page. Any customizations to the jacket's look persist even after page refreshes so the user is always looking at the last state they remember. Anyone who wants to proceed with their order is asked to quickly register with an email address in order to save their measurements. After that they can always re-enter their credentials from any browser and finish their order, which will now appear in the main navigation, later. Want to start a new order? Simply visit any jacket page and proceed in a linear fashion from there.

```ad-warning
title: Pain Point
Pain point! No one wants to have to interrupt what theyre doing to enter an email address so this part had to be as streamlined as possible.

```

#### Streamline the Measurement Process

One of key elements that the customer had to trust was that the jacket would fit them on arrival and it had to fit perfectly. To make sure this happens we needed a process by which we could get accurate measurements of the customers body at some point during their order. This is challenging two-fold since not only does it require the performance of a manual task away from their device but that task is also non-trivial and requires some domain knowledge.

To make the process as streamlined and frictionless as possible, the experience is initially presented as a step-by-step wizard but the user could easily see their progress and jump-to any step any time. They can even skip forward to checkout and enter their measurements later.

In order to ensure the most accurate measurements users are guided to focus on one at a time. Instructions are provided via text along with a companion video. There is even some very helpful client-side validation that warns you if you enter a measurement outside of a realistic range for that particular body part.

The result is a measurement-entry form that educates the user, gets an accurate result and provides enough flexibility and clarity to gain their trust.

#### Go The Extra Mile

The user experience doesn't just end with what the customer sees on the website. Some back and forth correspondance may be necessary to deal with the truly personal nature of a custom-tailored jacket. Therefore each order opens up a communication channel between the customer and the tailor that may take the shape of emails or even phone calls and is facilitated by an admin interface that can be accessed by company employees.

This backend admin panel allows employees to track orders and help them go from 'New' to 'Completed'. They can manage the measurements (along with any changes) and communicate with both the customer and the tailor staight from the order screen.

> Automated emails with relevant information fire as the orders moves through its lifecycle making sure that in most situations the entire administrative end of the order process is nothing more than a few clicks for everyone involved.

### Section 4 - Details

#### Login Form

The whole auth process is encapsulated into one Angular component that lives in multiple places around the site. It is the Login/Register/Reset forms rolled into one morphing form that eliminates rendant fields and shows the user a context-appropriate state.

It provides a relatively quick and seamless way for users to sign in without taking them away from what their order.

![[Password Reset Flow 2.gif|300]]

#### Video player is customized

Show hover state of buttons, how it matches branding.
![[Screen Shot 2022-01-25 at 8.19.11 AM.png|300]]

#### Seamless browsing experience

Changing color takes you to the details
Admin Backend
Menu which doubles as the header and breadcrumbs
Combine Homepage and Product Page

#### Performance

![screenshot of google performance score](https://via.placeholder.com/150?text=performance)

#### Aftercare Page

TODO

### Section 5 - Results

Sapayol.com is successfuly still running and selling jackets for over 6 years now with a 2.0 design that's currently in the works to accomodate the expansion of their selection.

## Other Stuff

- [ ] Show hover state of buttons, how it matches branding.
- [ ] Seamless browsing experience
- [ ] Changing color takes you to the details
- [ ] Menu which doubles as the header and breadcrumbs
- [ ] Combine Homepage and Product Page
- [ ] Focus on ‘wholistic design’ of sapayol.

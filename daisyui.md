
# daisyui

## version

5.0.9

## components


### Accordion
Accordion Accordion is used for showing and hiding content but only one item can stay open at a time.

#### usages

##### Accordion using radio inputs

```html
<div class="$$collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" checked="checked" />
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div class="$$collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div class="$$collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div class="$$collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div class="$$collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div class="$$collapse-title font-semibold">How do I update my profile information?</div>
  <div class="$$collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
```
  

##### Accordion with arrow icon

```html
<div class="$$collapse $$collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div class="$$collapse $$collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div class="$$collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div class="$$collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div class="$$collapse $$collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div class="$$collapse-title font-semibold">How do I update my profile information?</div>
  <div class="$$collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
```
  

##### Accordion with plus/minus icon

```html
<div class="$$collapse $$collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" checked="checked" />
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div class="$$collapse $$collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div class="$$collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div class="$$collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div class="$$collapse $$collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div class="$$collapse-title font-semibold">How do I update my profile information?</div>
  <div class="$$collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
```
  

##### Using Accordion and Join together

```html
<div class="$$join $$join-vertical bg-base-100">
  <div class="$$collapse $$collapse-arrow $$join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" checked="checked" />
    <div class="$$collapse-title font-semibold">How do I create an account?</div>
    <div class="$$collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
  </div>
  <div class="$$collapse $$collapse-arrow $$join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div class="$$collapse-title font-semibold">I forgot my password. What should I do?</div>
    <div class="$$collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
  </div>
  <div class="$$collapse $$collapse-arrow $$join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div class="$$collapse-title font-semibold">How do I update my profile information?</div>
    <div class="$$collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
  </div>
</div>
```
  
  

### Alert
Alert Alert informs users about important events.

#### usages

##### Alert

```html
<div role="alert" class="$$alert">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>12 unread messages. Tap to see.</span>
</div>
```
  

##### Info color

```html
<div role="alert" class="$$alert $$alert-info">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>New software update available.</span>
</div>
```
  

##### Success color

```html
<div role="alert" class="$$alert $$alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Your purchase has been confirmed!</span>
</div>
```
  

##### Warning color

```html
<div role="alert" class="$$alert $$alert-warning">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
  <span>Warning: Invalid email address!</span>
</div>
```
  

##### Error color

```html
<div role="alert" class="$$alert $$alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Error! Task failed successfully.</span>
</div>
```
  

##### Alert soft style

```html
<div role="alert" class="$$alert $$alert-info $$alert-soft">
  <span>12 unread messages. Tap to see.</span>
</div>
<div role="alert" class="$$alert $$alert-success $$alert-soft">
  <span>Your purchase has been confirmed!</span>
</div>
<div role="alert" class="$$alert $$alert-warning $$alert-soft">
  <span>Warning: Invalid email address!</span>
</div>
<div role="alert" class="$$alert $$alert-error $$alert-soft">
  <span>Error! Task failed successfully.</span>
</div>
```
  

##### Alert outline style

```html
<div role="alert" class="$$alert $$alert-info $$alert-outline">
  <span>12 unread messages. Tap to see.</span>
</div>
<div role="alert" class="$$alert $$alert-success $$alert-outline">
  <span>Your purchase has been confirmed!</span>
</div>
<div role="alert" class="$$alert $$alert-warning $$alert-outline">
  <span>Warning: Invalid email address!</span>
</div>
<div role="alert" class="$$alert $$alert-error $$alert-outline">
  <span>Error! Task failed successfully.</span>
</div>
```
  

##### Alert dash style

```html
<div role="alert" class="$$alert $$alert-info $$alert-dash">
  <span>12 unread messages. Tap to see.</span>
</div>
<div role="alert" class="$$alert $$alert-success $$alert-dash">
  <span>Your purchase has been confirmed!</span>
</div>
<div role="alert" class="$$alert $$alert-warning $$alert-dash">
  <span>Warning: Invalid email address!</span>
</div>
<div role="alert" class="$$alert $$alert-error $$alert-dash">
  <span>Error! Task failed successfully.</span>
</div>
```
  

##### Alert with buttons + responsive

```html
<div role="alert" class="$$alert $$alert-vertical sm:$$alert-horizontal">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>we use cookies for no reason.</span>
  <div>
    <button class="$$btn $$btn-sm">Deny</button>
    <button class="$$btn $$btn-sm $$btn-primary">Accept</button>
  </div>
</div>
```
  

##### Alert with title and description

```html
<div role="alert" class="$$alert $$alert-vertical sm:$$alert-horizontal">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div>
    <h3 class="font-bold">New message!</h3>
    <div class="text-xs">You have 1 unread message</div>
  </div>
  <button class="$$btn $$btn-sm">See</button>
</div>
```
  
  

### Avatar
Avatar Avatars are used to show a thumbnail representation of an individual or business in the interface.

#### usages

##### Avatar

```html
<div class="$$avatar">
  <div class="w-24 rounded">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```
  

##### Avatar in custom sizes

```html
<div class="$$avatar">
  <div class="w-32 rounded">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-20 rounded">
    <img
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-16 rounded">
    <img
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-8 rounded">
    <img
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
```
  

##### Avatar rounded

```html
<div class="$$avatar">
  <div class="w-24 rounded-xl">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```
  

##### Avatar with mask

```html
<div class="$$avatar">
  <div class="$$mask $$mask-squircle w-24">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div class="$$avatar">
  <div class="$$mask $$mask-hexagon w-24">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div class="$$avatar">
  <div class="$$mask $$mask-triangle w-24">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```
  

##### Avatar group

```html
<div class="$$avatar-group -space-x-6">
  <div class="$$avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
</div>
```
  

##### Avatar group with counter

```html
<div class="$$avatar-group -space-x-6">
  <div class="$$avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="$$avatar $$avatar-placeholder">
    <div class="bg-neutral text-neutral-content w-12">
      <span>+99</span>
    </div>
  </div>
</div>
```
  

##### Avatar with ring

```html
<div class="$$avatar">
  <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```
  

##### Avatar with presence indicator

```html
<div class="$$avatar $$avatar-online">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div class="$$avatar $$avatar-offline">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```
  

##### Avatar placeholder

```html
<div class="$$avatar $$avatar-placeholder">
  <div class="bg-neutral text-neutral-content w-24 rounded-full">
    <span class="text-3xl">D</span>
  </div>
</div>
<div class="$$avatar $$avatar-online $$avatar-placeholder">
  <div class="bg-neutral text-neutral-content w-16 rounded-full">
    <span class="text-xl">AI</span>
  </div>
</div>
<div class="$$avatar $$avatar-placeholder">
  <div class="bg-neutral text-neutral-content w-12 rounded-full">
    <span>SY</span>
  </div>
</div>
<div class="$$avatar $$avatar-placeholder">
  <div class="bg-neutral text-neutral-content w-8 rounded-full">
    <span class="text-xs">UI</span>
  </div>
</div>
```
  
  

### Badge
Badge Badges are used to inform the user of the status of specific data.

#### usages

##### Badge

```html
<span class="$$badge">Badge</span>
```
  

##### Badge sizes

```html
<div class="$$badge $$badge-xs">Xsmall</div>
<div class="$$badge $$badge-sm">Small</div>
<div class="$$badge $$badge-md">Medium</div>
<div class="$$badge $$badge-lg">Large</div>
<div class="$$badge $$badge-xl">Xlarge</div>
```
  

##### Badge with colors

```html
<div class="$$badge $$badge-primary">Primary</div>
<div class="$$badge $$badge-secondary">Secondary</div>
<div class="$$badge $$badge-accent">Accent</div>
<div class="$$badge $$badge-neutral">Neutral</div>
<div class="$$badge $$badge-info">Info</div>
<div class="$$badge $$badge-success">Success</div>
<div class="$$badge $$badge-warning">Warning</div>
<div class="$$badge $$badge-error">Error</div>
```
  

##### Badge with soft style

```html
<div class="$$badge $$badge-soft $$badge-primary">Primary</div>
<div class="$$badge $$badge-soft $$badge-secondary">Secondary</div>
<div class="$$badge $$badge-soft $$badge-accent">Accent</div>
<div class="$$badge $$badge-soft $$badge-neutral">Neutral</div>
<div class="$$badge $$badge-soft $$badge-info">Info</div>
<div class="$$badge $$badge-soft $$badge-success">Success</div>
<div class="$$badge $$badge-soft $$badge-warning">Warning</div>
<div class="$$badge $$badge-soft $$badge-error">Error</div>
```
  

##### Badge with outline style

```html
<div class="$$badge $$badge-outline $$badge-primary">Primary</div>
<div class="$$badge $$badge-outline $$badge-secondary">Secondary</div>
<div class="$$badge $$badge-outline $$badge-accent">Accent</div>
<div class="$$badge $$badge-outline $$badge-neutral">Neutral</div>
<div class="$$badge $$badge-outline $$badge-info">Info</div>
<div class="$$badge $$badge-outline $$badge-success">Success</div>
<div class="$$badge $$badge-outline $$badge-warning">Warning</div>
<div class="$$badge $$badge-outline $$badge-error">Error</div>
```
  

##### Badge with dash style

```html
<div class="$$badge $$badge-dash $$badge-primary">Primary</div>
<div class="$$badge $$badge-dash $$badge-secondary">Secondary</div>
<div class="$$badge $$badge-dash $$badge-accent">Accent</div>
<div class="$$badge $$badge-dash $$badge-neutral">Neutral</div>
<div class="$$badge $$badge-dash $$badge-info">Info</div>
<div class="$$badge $$badge-dash $$badge-success">Success</div>
<div class="$$badge $$badge-dash $$badge-warning">Warning</div>
<div class="$$badge $$badge-dash $$badge-error">Error</div>
```
  

##### Badge ghost

```html
<div class="$$badge $$badge-ghost">ghost</div>
```
  

##### Empty badge

```html
<div class="$$badge $$badge-primary $$badge-lg"></div>
<div class="$$badge $$badge-primary $$badge-md"></div>
<div class="$$badge $$badge-primary $$badge-sm"></div>
<div class="$$badge $$badge-primary $$badge-xs"></div>
```
  

##### Badge with icon

```html
<div class="$$badge $$badge-info">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" stroke-width="2"></circle></g></svg>
  Info
</div>
<div class="$$badge $$badge-success">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></polyline></g></svg>
  Success
</div>
<div class="$$badge $$badge-warning">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><g fill="currentColor"><path d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><line x1="9" y1="6.5" x2="9" y2="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line><path d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill="currentColor" data-stroke="none" stroke="none"></path></g></svg>
  Warning
</div>
<div class="$$badge $$badge-error">
  <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor"><rect x="1.972" y="11" width="20.056" height="2" transform="translate(-4.971 12) rotate(-45)" fill="currentColor" stroke-width="0"></rect><path d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z" stroke-width="0" fill="currentColor"></path></g></svg>
  Error
</div>
```
  

##### Badge in a text

```html
<h1 class="text-xl font-semibold">
  Heading 1 <span class="$$badge $$badge-xl">Badge</span>
</h1>

<h2 class="text-lg font-semibold">
  Heading 2 <span class="$$badge $$badge-lg">Badge</span>
</h2>

<h3 class="text-base font-semibold">
  Heading 3 <span class="$$badge $$badge-md">Badge</span>
</h3>

<h4 class="text-sm font-semibold">
  Heading 4 <span class="$$badge $$badge-sm">Badge</span>
</h4>

<h5 class="text-xs font-semibold">
  Heading 5 <span class="$$badge $$badge-xs">Badge</span>
</h5>

<p class="text-xs">
  Paragraph <span class="$$badge $$badge-xs">Badge</span>
</p>
```
  

##### Badge in a button

```html
<button class="$$btn">
  Inbox <div class="$$badge $$badge-sm">+99</div>
</button>

<button class="$$btn">
  Inbox <div class="$$badge $$badge-sm $$badge-secondary">+99</div>
</button>
```
  
  

### Breadcrumbs
Breadcrumbs Breadcrumbs helps users to navigate through the website.

#### usages

##### Breadcrumbs

```html
<div class="$$breadcrumbs text-sm">
  <ul>
    <li><a>Home</a></li>
    <li><a>Documents</a></li>
    <li>Add Document</li>
  </ul>
</div>
```
  

##### Breadcrumbs with icons

```html
<div class="$$breadcrumbs text-sm">
  <ul>
    <li>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-4 w-4 stroke-current">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
        Home
      </a>
    </li>
    <li>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-4 w-4 stroke-current">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
        Documents
      </a>
    </li>
    <li>
      <span class="inline-flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-4 w-4 stroke-current">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        Add Document
      </span>
    </li>
  </ul>
</div>
```
  

##### Breadcrumbs with max-width

```html
<div class="$$breadcrumbs max-w-xs text-sm">
  <ul>
    <li>Long text 1</li>
    <li>Long text 2</li>
    <li>Long text 3</li>
    <li>Long text 4</li>
    <li>Long text 5</li>
  </ul>
</div>
```
  
  

### Button
Button Buttons allow the user to take actions or make choices.

#### usages

##### Button

```html
<button class="$$btn">Default</button>
```
  

##### Button sizes

```html
<button class="$$btn $$btn-xs">Xsmall</button>
<button class="$$btn $$btn-sm">Small</button>
<button class="$$btn">Medium</button>
<button class="$$btn $$btn-lg">Large</button>
<button class="$$btn $$btn-xl">Xlarge</button>
```
  

##### Responsive button

```html
<button class="$$btn $$btn-xs sm:$$btn-sm md:$$btn-md lg:$$btn-lg xl:$$btn-xl">Responsive</button>
```
  

##### Buttons colors

```html
<button class="$$btn $$btn-neutral">Neutral</button>
<button class="$$btn $$btn-primary">Primary</button>
<button class="$$btn $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-accent">Accent</button>
<button class="$$btn $$btn-info">Info</button>
<button class="$$btn $$btn-success">Success</button>
<button class="$$btn $$btn-warning">Warning</button>
<button class="$$btn $$btn-error">Error</button>
```
  

##### Soft buttons

```html
<button class="$$btn $$btn-soft">Default</button>
<button class="$$btn $$btn-soft $$btn-primary">Primary</button>
<button class="$$btn $$btn-soft $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-soft $$btn-accent">Accent</button>
<button class="$$btn $$btn-soft $$btn-info">Info</button>
<button class="$$btn $$btn-soft $$btn-success">Success</button>
<button class="$$btn $$btn-soft $$btn-warning">Warning</button>
<button class="$$btn $$btn-soft $$btn-error">Error</button>
```
  

##### Outline buttons

```html
<button class="$$btn $$btn-outline">Default</button>
<button class="$$btn $$btn-outline $$btn-primary">Primary</button>
<button class="$$btn $$btn-outline $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-outline $$btn-accent">Accent</button>
<button class="$$btn $$btn-outline $$btn-info">Info</button>
<button class="$$btn $$btn-outline $$btn-success">Success</button>
<button class="$$btn $$btn-outline $$btn-warning">Warning</button>
<button class="$$btn $$btn-outline $$btn-error">Error</button>
```
  

##### Dash buttons

```html
<button class="$$btn $$btn-dash">Default</button>
<button class="$$btn $$btn-dash $$btn-primary">Primary</button>
<button class="$$btn $$btn-dash $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-dash $$btn-accent">Accent</button>
<button class="$$btn $$btn-dash $$btn-info">Info</button>
<button class="$$btn $$btn-dash $$btn-success">Success</button>
<button class="$$btn $$btn-dash $$btn-warning">Warning</button>
<button class="$$btn $$btn-dash $$btn-error">Error</button>
```
  

##### Active buttons

```html
<button class="$$btn $$btn-active">Default</button>
<button class="$$btn $$btn-active $$btn-primary">Primary</button>
<button class="$$btn $$btn-active $$btn-secondary">Secondary</button>
<button class="$$btn $$btn-active $$btn-accent">Accent</button>
<button class="$$btn $$btn-active $$btn-info">Info</button>
<button class="$$btn $$btn-active $$btn-success">Success</button>
<button class="$$btn $$btn-active $$btn-warning">Warning</button>
<button class="$$btn $$btn-active $$btn-error">Error</button>
```
  

##### Buttons ghost and button link

```html
<button class="$$btn $$btn-ghost">Ghost</button>
<button class="$$btn $$btn-link">Link</button>
```
  

##### Wide button

```html
<button class="$$btn $$btn-wide">Wide</button>
```
  

##### Buttons with any HTML tags

```html
<a role="button" class="$$btn">Link</a>
<button type="submit" class="$$btn">Button</button>
<input type="button" value="Input" class="$$btn" />
<input type="submit" value="Submit" class="$$btn" />
<input type="radio" aria-label="Radio" class="$$btn" />
<input type="checkbox" aria-label="Checkbox" class="$$btn" />
<input type="reset" value="Reset" class="$$btn" />
```
  

##### Disabled buttons

```html
<button class="$$btn" disabled="disabled">Disabled using attribute</button>
<button class="$$btn $$btn-disabled" tabindex="-1" role="button" aria-disabled="true">
  Disabled using class name
</button>
```
  

##### Square button and circle button

```html
<button class="$$btn $$btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>
<button class="$$btn $$btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>
```
  

##### Button with Icon

```html
<button class="$$btn">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
  Like
</button>
<button class="$$btn">
  Like
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>
```
  

##### Button block

```html
<button class="$$btn $$btn-block">block</button>
```
  

##### Button with loading spinner

```html
<button class="$$btn $$btn-square">
  <span class="$$loading $$loading-spinner"></span>
</button>

<button class="$$btn">
  <span class="$$loading $$loading-spinner"></span>
  loading
</button>
```
  

##### Login buttons

```html
<!-- Email -->
<button class="$$btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  Login with Email
</button>

<!-- GitHub -->
<button class="$$btn bg-black text-white border-black">
  <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
  Login with GitHub
</button>

<!-- Google -->
<button class="$$btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

<!-- Facebook -->
<button class="$$btn bg-[#1A77F2] text-white border-[#005fd8]">
  <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
  Login with Facebook
</button>

<!-- X -->
<button class="$$btn bg-black text-white border-black">
  <svg aria-label="X logo" width="16" height="12" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/></svg>
  Login with X
</button>

<!-- Kakao -->
<button class="$$btn bg-[#FEE502] text-[#181600] border-[#f1d800]">
  <svg aria-label="Kakao logo" width="16" height="16" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#181600" d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"></path></svg>
  카카오 로그인
</button>

<!-- Apple -->
<button class="$$btn bg-black text-white border-black">
  <svg aria-label="Apple logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1195 1195"><path fill="white" d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"></path></svg>
  Login with Apple
</button>

<!-- Amazon -->
<button class="$$btn bg-[#FF9900] text-black border-[#e17d00]">
  <svg aria-label="Amazon logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="black"><path d="M14.463 13.831c-1.753 1.294-4.291 1.981-6.478 1.981-3.066 0-5.825-1.131-7.912-3.019-.163-.147-.019-.35.178-.234 2.253 1.313 5.041 2.1 7.919 2.1 1.941 0 4.075-.403 6.041-1.238.294-.125.544.197.253.409z"></path><path d="M15.191 13c-.225-.287-1.481-.137-2.047-.069-.172.019-.197-.128-.044-.238 1.003-.703 2.647-.5 2.838-.266.194.238-.05 1.884-.991 2.672-.144.122-.281.056-.219-.103.216-.528.688-1.709.463-1.997zM11.053 11.838l.003.003c.387-.341 1.084-.95 1.478-1.278.156-.125.128-.334.006-.509-.353-.488-.728-.884-.728-1.784v-3c0-1.272.088-2.438-.847-3.313-.738-.706-1.963-.956-2.9-.956-1.831 0-3.875.684-4.303 2.947-.047.241.131.369.287.403l1.866.203c.175-.009.3-.181.334-.356.159-.778.813-1.156 1.547-1.156.397 0 .847.144 1.081.5.269.397.234.938.234 1.397v.25c-1.116.125-2.575.206-3.619.666-1.206.522-2.053 1.584-2.053 3.147 0 2 1.259 3 2.881 3 1.369 0 2.116-.322 3.172-1.403.35.506.463.753 1.103 1.284a.395.395 0 0 0 .456-.044zm-1.94-4.694c0 .75.019 1.375-.359 2.041-.306.544-.791.875-1.331.875-.737 0-1.169-.563-1.169-1.394 0-1.641 1.472-1.938 2.863-1.938v.416z"></path></g></svg>
  Login with Amazon
</button>

<!-- Microsoft -->
<button class="$$btn bg-[#2F2F2F] text-white border-black">
  <svg aria-label="Microsoft logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 96H247V247H96" fill="#f24f23"></path><path d="M265 96V247H416V96" fill="#7eba03"></path><path d="M96 265H247V416H96" fill="#3ca4ef"></path><path d="M265 265H416V416H265" fill="#f9ba00"></path></svg>
  Login with Microsoft
</button>

<!-- Line -->
<button class="$$btn bg-[#03C755] text-white border-[#00b544]">
  <svg aria-label="Line logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill-rule="evenodd" stroke-linejoin="round" fill="white"><path fill-rule="nonzero" d="M12.91 6.57c.232 0 .42.19.42.42 0 .23-.188.42-.42.42h-1.17v.75h1.17a.42.42 0 1 1 0 .84h-1.59a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42h1.59a.42.42 0 0 1-.002.84h-1.17v.75h1.17zm-2.57 2.01a.421.421 0 0 1-.757.251l-1.63-2.217V8.58a.42.42 0 0 1-.42.42.42.42 0 0 1-.418-.42V5.4a.418.418 0 0 1 .755-.249L9.5 7.366V5.4c0-.23.188-.42.42-.42.23 0 .42.19.42.42v3.18zm-3.828 0c0 .23-.188.42-.42.42a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42.23 0 .418.19.418.42v3.18zM4.868 9h-1.59c-.23 0-.42-.19-.42-.42V5.4c0-.23.19-.42.42-.42.232 0 .42.19.42.42v2.76h1.17a.42.42 0 1 1 0 .84M16 6.87C16 3.29 12.41.376 8 .376S0 3.29 0 6.87c0 3.208 2.846 5.896 6.69 6.405.26.056.615.172.705.394.08.2.053.518.026.722 0 0-.092.565-.113.685-.035.203-.16.79.693.432.854-.36 4.607-2.714 6.285-4.646C15.445 9.594 16 8.302 16 6.87"></path></g></svg>
  LINEでログイン
</button>

<!-- Slack -->
<button class="$$btn bg-[#622069] text-white border-[#591660]">
  <svg aria-label="Slack logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g stroke-linecap="round" stroke-width="78"><path stroke="#36c5f0" d="m110 207h97m0-97h.1v-.1"></path><path stroke="#2eb67d" d="m305 110v97m97 0v.1h.1"></path><path stroke="#ecb22e" d="m402 305h-97m0 97h-.1v.1"></path><path stroke="#e01e5a" d="M110 305h.1v.1m97 0v97"></path></g></svg>
  Login with Slack
</button>

<!-- LinkedIn -->
<button class="$$btn bg-[#0967C2] text-white border-[#0059b3]">
  <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path></svg>
  Login with LinkedIn
</button>

<!-- VK -->
<button class="$$btn bg-[#47698F] text-white border-[#35567b]">
  <svg aria-label="VK logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2240 2240"><g fill="white"><path d="M2077 904q23 64-150 294-24 32-65 85-78 100-90 131-17 41 14 81 17 21 81 82h1l1 1 1 1 2 2q141 131 191 221 3 5 6.5 12.5t7 26.5-.5 34-25 27.5-59 12.5l-256 4q-24 5-56-5t-52-22l-20-12q-30-21-70-64t-68.5-77.5-61-58-56.5-15.5q-3 1-8 3.5t-17 14.5-21.5 29.5-17 52-6.5 77.5q0 15-3.5 27.5t-7.5 18.5l-4 5q-18 19-53 22h-115q-71 4-146-16.5t-131.5-53-103-66T648 1722l-25-24q-10-10-27.5-30t-71.5-91-106-151-122.5-211T165 943q-6-16-6-27t3-16l4-6q15-19 57-19l274-2q12 2 23 6.5t16 8.5l5 3q16 11 24 32 20 50 46 103.5t41 81.5l16 29q29 60 56 104t48.5 68.5T814 1348t34 14 27-5q2-1 5-5t12-22 13.5-47 9.5-81 0-125q-2-40-9-73t-14-46l-6-12q-25-34-85-43-13-2 5-24 17-19 38-30 53-26 239-24 82 1 135 13 20 5 33.5 13.5t20.5 24 10.5 32 3.5 45.5-1 55-2.5 70.5-1.5 82.5q0 11-1 42t-.5 48 3.5 40.5 11.5 39 22.5 24.5q8 2 17 4t26-11 38-34.5 52-67 68-107.5q60-104 107-225 4-10 10-17.5t11-10.5l4-3 5-2.5 13-3 20-.5 288-2q39-5 64 2.5t31 16.5z"></path></g></svg>
  Login with VK
</button>

<!-- WeChat -->
<button class="$$btn bg-[#5EBB2B] text-white border-[#4eaa0c]">
  <svg aria-label="WeChat logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="white"><path d="M11.606,3.068C5.031,3.068,0,7.529,0,12.393s4.344,7.681,4.344,7.681l-.706,2.676c-.093,.353,.284,.644,.602,.464l3.173-1.798c1.403,.447,4.381,.59,4.671,.603-.208-.721-.311-1.432-.311-2.095,0-3.754,3.268-9.04,10.532-9.04,.165,0,.331,.004,.496,.011-.965-4.627-5.769-7.827-11.195-7.827Zm-4.327,7.748c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Zm8.386,0c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Z"></path><path d="M32,19.336c0-4.26-4.998-7.379-9.694-7.379-6.642,0-9.459,4.797-9.459,7.966s2.818,7.966,9.459,7.966c1.469,0,2.762-.211,3.886-.584l2.498,1.585c.197,.125,.447-.052,.394-.279l-.567-2.46c2.36-1.643,3.483-4.234,3.483-6.815Zm-12.73-.81c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275c0,.705-.571,1.275-1.275,1.275Zm6.373,0c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275-.571,1.275-1.275,1.275Z"></path></g></svg>
  Login with WeChat
</button>

<!-- Metamask -->
<button class="$$btn  bg-white text-black border-[#e5e5e5]">
  <svg aria-label="MetaMask logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 507.83 470.86"><defs><style>.b,.c,.d,.e,.f,.g,.j{stroke-linecap:round;stroke-linejoin:round}.b{fill:#e4761b;stroke:#e4761b}.c{fill:#d7c1b3;stroke:#d7c1b3}.d{fill:#233447;stroke:#233447}.e{fill:#cd6116;stroke:#cd6116}.f{fill:#e4751f;stroke:#e4751f}.g{fill:#f6851b;stroke:#f6851b}.j{fill:#763d16;stroke:#763d16}</style></defs><path d="M482.09.5 284.32 147.38l36.58-86.66z" style="fill:#e2761b;stroke:#e2761b;stroke-linecap:round;stroke-linejoin:round"/><path d="m25.54.5 196.18 148.27-34.79-88.05zM410.93 340.97l-52.67 80.7 112.7 31 32.4-109.91zM4.67 342.76l32.2 109.91 112.7-31-52.67-80.7z" class="b"/><path d="m143.21 204.62-31.41 47.51 111.9 4.97-3.97-120.25zM364.42 204.62l-77.51-69.16-2.59 121.64 111.71-4.97zM149.57 421.67l67.18-32.8-58.04-45.32zM290.88 388.87l67.38 32.8-9.34-78.12z" class="b"/><path d="m358.26 421.67-67.38-32.8 5.37 43.93-.6 18.48zM149.57 421.67l62.61 29.61-.4-18.48 4.97-43.93z" class="c"/><path d="m213.17 314.54-56.05-16.5 39.55-18.09zM294.46 314.54l16.5-34.59 39.75 18.09z" class="d"/><path d="m149.57 421.67 9.54-80.7-62.21 1.79zM348.72 340.97l9.54 80.7 52.67-78.91zM396.03 252.13l-111.71 4.97 10.34 57.44 16.5-34.59 39.75 18.09zM157.12 298.04l39.75-18.09 16.3 34.59 10.53-57.44-111.9-4.97z" class="e"/><path d="m111.8 252.13 46.91 91.42-1.59-45.51zM350.91 298.04l-1.99 45.51 47.11-91.42zM223.7 257.1l-10.53 57.44 13.12 67.77 2.98-89.24zM284.32 257.1l-5.36 35.77 2.38 89.44 13.32-67.77z" class="f"/><path d="m294.66 314.54-13.32 67.77 9.54 6.56 58.04-45.32 1.99-45.51zM157.12 298.04l1.59 45.51 58.04 45.32 9.54-6.56-13.12-67.77z" class="g"/><path d="m295.65 451.28.6-18.48-4.97-4.38h-74.93l-4.57 4.38.4 18.48-62.61-29.61 21.86 17.88 44.32 30.81h76.13l44.52-30.81 21.86-17.88z" style="stroke-linecap:round;stroke-linejoin:round;fill:#c0ad9e;stroke:#c0ad9e"/><path d="m290.88 388.87-9.54-6.56h-55.05l-9.54 6.56-4.97 43.93 4.57-4.38h74.93l4.97 4.38z" style="stroke-linecap:round;stroke-linejoin:round;fill:#161616;stroke:#161616"/><path d="m490.44 156.92 16.89-81.09L482.09.5 290.88 142.41l73.54 62.21 103.95 30.41 23.06-26.83-9.94-7.15 15.9-14.51-12.32-9.54 15.9-12.13zM.5 75.83l16.89 81.09-10.73 7.95L22.56 177l-12.12 9.54 15.9 14.51-9.94 7.15 22.86 26.83 103.95-30.41 73.54-62.21L25.54.5z" class="j"/><path d="m468.37 235.03-103.95-30.41 31.61 47.51-47.11 91.42 62.01-.79h92.43zM143.21 204.62 39.26 235.03 4.67 342.76H96.9l61.81.79-46.91-91.42zM284.32 257.1l6.56-114.69 30.22-81.69H186.93l29.82 81.69 6.95 114.69 2.39 36.17.2 89.04h55.05l.4-89.04z" class="g"/></svg>
  Login with MetaMask
</button>

```
  
  

### Calendar
Calendar Calendar includes styles for different calendar libraries.

#### usages

##### Cally calendar example

```html
<!--
* Import Cally web component from CDN
<script type="module" src="https://unpkg.com/cally"></script>

* Or install as a dependency:
npm i cally
* and import it in JS
import "cally";
-->

<calendar-date class="$$cally bg-base-100 border border-base-300 shadow-lg rounded-box">
  <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
  <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
  <calendar-month></calendar-month>
</calendar-date>
```
  

##### Cally date picker example

```html
<!--
* Import Cally web component from CDN
<script type="module" src="https://unpkg.com/cally"></script>

* Or install as a dependency:
npm i cally
* and import it in JS
import "cally";
-->

<button popovertarget="cally-popover1" class="$$input $$input-border" id="cally1" style="anchor-name:--cally1">
  Pick a date
</button>
<div popover id="cally-popover1" class="$$dropdown bg-base-100 rounded-box shadow-lg" style="position-anchor:--cally1">
  <calendar-date class="$$cally" onchange={document.getElementById('cally1').innerText = this.value}>
    <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
    <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
    <calendar-month></calendar-month>
  </calendar-date>
</div>
```
  
  

### Card
Card Cards are used to group and display content in a way that is easily readable.

#### usages

##### Card

```html
<div class="$$card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```
  

##### Pricing Card

```html
<div class="$$card w-96 bg-base-100 shadow-sm">
  <div class="$$card-body">
    <span class="$$badge $$badge-xs $$badge-warning">Most Popular</span>
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold">Premium</h2>
      <span class="text-xl">$29/mo</span>
    </div>
    <ul class="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
      <li class="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span class="line-through">Seamless cloud integration</span>
      </li>
      <li class="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span class="line-through">Real-time collaboration tools</span>
      </li>
    </ul>
    <div class="mt-6">
      <button class="$$btn $$btn-primary $$btn-block">Subscribe</button>
    </div>
  </div>
</div>
```
  

##### Card sizes

```html
<div class="$$card w-96 bg-base-100 $$card-xs shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Xsmall Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end $$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="$$card w-96 bg-base-100 $$card-sm shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Small Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end $$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="$$card w-96 bg-base-100 $$card-md shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Medium Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end $$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="$$card w-96 bg-base-100 $$card-lg shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Large Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end $$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="$$card w-96 bg-base-100 $$card-xl shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Xlarge Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="justify-end $$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```
  

##### Card with a card-border

```html
<div class="$$card $$card-border bg-base-100 w-96">
  <div class="$$card-body">
    <h2 class="$$card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```
  

##### Card with a dash border

```html
<div class="$$card $$card-dash bg-base-100 w-96">
  <div class="$$card-body">
    <h2 class="$$card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```
  

##### Card with badge

```html
<div class="$$card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title">
      Card Title
      <div class="$$badge $$badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <div class="$$badge $$badge-outline">Fashion</div>
      <div class="$$badge $$badge-outline">Products</div>
    </div>
  </div>
</div>
```
  

##### Card with bottom image

```html
<div class="$$card bg-base-100 w-96 shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
</div>
```
  

##### Card with centered content and paddings

```html
<div class="$$card bg-base-100 w-96 shadow-sm">
  <figure class="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="$$card-body items-center text-center">
    <h2 class="$$card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```
  

##### Card with image overlay

```html
<div class="$$card bg-base-100 $$image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```
  

##### Card with no image

```html
<div class="$$card bg-base-100 w-96 shadow-sm">
  <div class="$$card-body">
    <h2 class="$$card-title">Card title!</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```
  

##### Card with custom color

```html
<div class="$$card bg-primary text-primary-content w-96">
  <div class="$$card-body">
    <h2 class="$$card-title">Card title!</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn">Buy Now</button>
    </div>
  </div>
</div>
```
  

##### Centered card with neutral color

```html
<div class="$$card bg-neutral text-neutral-content w-96">
  <div class="$$card-body items-center text-center">
    <h2 class="$$card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Accept</button>
      <button class="$$btn $$btn-ghost">Deny</button>
    </div>
  </div>
</div>
```
  

##### Card with action on top

```html
<div class="$$card bg-base-100 w-96 shadow-sm">
  <div class="$$card-body">
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-square $$btn-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <p>We are using cookies for no reason.</p>
  </div>
</div>
```
  

##### Card with image on side

```html
<div class="$$card $$card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Watch</button>
    </div>
  </div>
</div>
```
  

##### Responsive card (vertical on small screen, horizontal on large screen)

```html
<div class="$$card lg:$$card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div class="$$card-actions justify-end">
      <button class="$$btn $$btn-primary">Listen</button>
    </div>
  </div>
</div>
```
  
  

### Carousel
Carousel Carousel show images or content in a scrollable area.

#### usages

##### Snap to start (default)

```html
<div class="$$carousel rounded-box">
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      alt="Burger" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Burger" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Burger" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      alt="Burger" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      alt="Burger" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      alt="Burger" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Burger" />
  </div>
</div>
```
  

##### Snap to center

```html
<div class="$$carousel $$carousel-center rounded-box">
  <div class="$$carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Pizza" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Pizza" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      alt="Pizza" />
  </div>
  <div class="$$carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
  </div>
  <div class="$$carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Pizza" />
  </div>
</div>
```
  

##### Snap to end

```html
<div class="$$carousel $$carousel-end rounded-box">
  <div class="$$carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Drink" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Drink" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Drink" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      alt="Drink" />
  </div>
  <div class="$$carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Drink" />
  </div>
  <div class="$$carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Drink" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Drink" />
  </div>
</div>
```
  

##### Carousel with full width items

```html
<div class="$$carousel rounded-box w-64">
  <div class="$$carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div class="$$carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div class="$$carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div class="$$carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div class="$$carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div class="$$carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div class="$$carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
</div>
```
  

##### Vertical carousel

```html
<div class="$$carousel $$carousel-vertical rounded-box h-96">
  <div class="$$carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
  </div>
  <div class="$$carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
  </div>
  <div class="$$carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
  </div>
  <div class="$$carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
  </div>
  <div class="$$carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
  </div>
  <div class="$$carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
  </div>
  <div class="$$carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
  </div>
</div>
```
  

##### Carousel with half width items

```html
<div class="$$carousel rounded-box w-96">
  <div class="$$carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      class="w-full" />
  </div>
  <div class="$$carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      class="w-full" />
  </div>
  <div class="$$carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      class="w-full" />
  </div>
  <div class="$$carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      class="w-full" />
  </div>
  <div class="$$carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      class="w-full" />
  </div>
  <div class="$$carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      class="w-full" />
  </div>
  <div class="$$carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      class="w-full" />
  </div>
</div>
```
  

##### Full-bleed carousel

```html
<div class="$$carousel $$carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      class="rounded-box" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      class="rounded-box" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      class="rounded-box" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      class="rounded-box" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      class="rounded-box" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      class="rounded-box" />
  </div>
  <div class="$$carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      class="rounded-box" />
  </div>
</div>
```
  

##### Carousel with indicator buttons

```html
<div class="$$carousel w-full">
  <div id="item1" class="$$carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      class="w-full" />
  </div>
  <div id="item2" class="$$carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      class="w-full" />
  </div>
  <div id="item3" class="$$carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      class="w-full" />
  </div>
  <div id="item4" class="$$carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      class="w-full" />
  </div>
</div>
<div class="flex w-full justify-center gap-2 py-2">
  <a href="#item1" class="$$btn $$btn-xs">1</a>
  <a href="#item2" class="$$btn $$btn-xs">2</a>
  <a href="#item3" class="$$btn $$btn-xs">3</a>
  <a href="#item4" class="$$btn $$btn-xs">4</a>
</div>
```
  

##### Carousel with next/prev buttons

```html
<div class="$$carousel w-full">
  <div id="slide1" class="$$carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" class="$$btn $$btn-circle">❮</a>
      <a href="#slide2" class="$$btn $$btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" class="$$carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" class="$$btn $$btn-circle">❮</a>
      <a href="#slide3" class="$$btn $$btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" class="$$carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" class="$$btn $$btn-circle">❮</a>
      <a href="#slide4" class="$$btn $$btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" class="$$carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" class="$$btn $$btn-circle">❮</a>
      <a href="#slide1" class="$$btn $$btn-circle">❯</a>
    </div>
  </div>
</div>
```
  
  

### Chat bubble
Chat bubble Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.

#### usages

##### chat-start and chat-end

```html
<div class="$$chat $$chat-start">
  <div class="$$chat-bubble">
    It's over Anakin,
    <br />
    I have the high ground.
  </div>
</div>
<div class="$$chat $$chat-end">
  <div class="$$chat-bubble">You underestimate my power!</div>
</div>
```
  

##### Chat with image

```html
<div class="$$chat $$chat-start">
  <div class="$$chat-image $$avatar">
    <div class="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="$$chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
</div>
<div class="$$chat $$chat-start">
  <div class="$$chat-image $$avatar">
    <div class="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="$$chat-bubble">It was you who would bring balance to the Force</div>
</div>
<div class="$$chat $$chat-start">
  <div class="$$chat-image $$avatar">
    <div class="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="$$chat-bubble">Not leave it in Darkness</div>
</div>
```
  

##### Chat with image, header and footer

```html
<div class="$$chat $$chat-start">
  <div class="$$chat-image $$avatar">
    <div class="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="$$chat-header">
    Obi-Wan Kenobi
    <time class="text-xs opacity-50">12:45</time>
  </div>
  <div class="$$chat-bubble">You were the Chosen One!</div>
  <div class="$$chat-footer opacity-50">Delivered</div>
</div>
<div class="$$chat $$chat-end">
  <div class="$$chat-image $$avatar">
    <div class="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="$$chat-header">
    Anakin
    <time class="text-xs opacity-50">12:46</time>
  </div>
  <div class="$$chat-bubble">I hate you!</div>
  <div class="$$chat-footer opacity-50">Seen at 12:46</div>
</div>
```
  

##### Chat with header and footer

```html
<div class="$$chat $$chat-start">
  <div class="$$chat-header">
    Obi-Wan Kenobi
    <time class="text-xs opacity-50">2 hours ago</time>
  </div>
  <div class="$$chat-bubble">You were the Chosen One!</div>
  <div class="$$chat-footer opacity-50">Seen</div>
</div>
<div class="$$chat $$chat-start">
  <div class="$$chat-header">
    Obi-Wan Kenobi
    <time class="text-xs opacity-50">2 hour ago</time>
  </div>
  <div class="$$chat-bubble">I loved you.</div>
  <div class="$$chat-footer opacity-50">Delivered</div>
</div>
```
  

##### Chat Bubble with colors

```html
<div class="$$chat $$chat-start">
  <div class="$$chat-bubble $$chat-bubble-primary">What kind of nonsense is this</div>
</div>
<div class="$$chat $$chat-start">
  <div class="$$chat-bubble $$chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
</div>
<div class="$$chat $$chat-start">
  <div class="$$chat-bubble $$chat-bubble-accent">That's never been done in the history of the Jedi.</div>
</div>
<div class="$$chat $$chat-start">
  <div class="$$chat-bubble $$chat-bubble-neutral">It's insulting!</div>
</div>
<div class="$$chat $$chat-end">
  <div class="$$chat-bubble $$chat-bubble-info">Calm down, Anakin.</div>
</div>
<div class="$$chat $$chat-end">
  <div class="$$chat-bubble $$chat-bubble-success">You have been given a great honor.</div>
</div>
<div class="$$chat $$chat-end">
  <div class="$$chat-bubble $$chat-bubble-warning">To be on the Council at your age.</div>
</div>
<div class="$$chat $$chat-end">
  <div class="$$chat-bubble $$chat-bubble-error">It's never happened before.</div>
</div>
```
  
  

### Checkbox
Checkbox Checkboxes are used to select or deselect a value.

#### usages

##### Checkbox

```html
<input type="checkbox" checked="checked" class="$$checkbox" />
```
  

##### With fieldset and fieldset-label

```html
<fieldset class="$$fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
  <legend class="$$fieldset-legend">Login options</legend>
  <label class="$$fieldset-label">
    <input type="checkbox" checked="checked" class="$$checkbox" />
    Remember me
  </label>
</fieldset>
```
  

##### Sizes

```html
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-xs" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-sm" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-md" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-lg" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-xl" />
```
  

##### Colors

```html
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-primary" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-secondary" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-accent" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-neutral" />

<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-info" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-success" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-warning" />
<input type="checkbox" checked="checked" class="$$checkbox $$checkbox-error" />
```
  

##### Disabled

```html
<input type="checkbox" class="$$checkbox" disabled />
<input type="checkbox" class="$$checkbox" disabled checked="checked" />
```
  

##### Indeterminate

```html
<!-- You can make a checkbox indeterminate using JS -->
<script>
  document.getElementById("my-checkbox").indeterminate = true
</script>
<input type="checkbox" class="$$checkbox" id="my-checkbox" />
```
  

##### Checkbox with custom colors

```html
<input type="checkbox" checked="checked" class="$$checkbox border-indigo-600 bg-indigo-500 checked:bg-orange-400 checked:text-orange-800 checked:border-orange-500 " />
```
  
  

### Collapse
Collapse Collapse is used for showing and hiding content.

#### usages

##### Collapse with focus

```html
<div tabindex="0" class="$$collapse bg-base-100 border-base-300 border">
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```
  

##### Collapse with checkbox

```html
<div class="$$collapse bg-base-100 border-base-300 border">
  <input type="checkbox" />
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```
  

#####  Collapse using details and summary tag

```html
<details class="$$collapse bg-base-100 border-base-300 border">
  <summary class="$$collapse-title font-semibold">How do I create an account?</summary>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</details>
```
  

##### Without border and background color

```html
<div tabindex="0" class="$$collapse">
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```
  

##### With arrow icon

```html
<div tabindex="0" class="$$collapse $$collapse-arrow bg-base-100 border-base-300 border">
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```
  

##### With arrow plus/minus icon

```html
<div tabindex="0" class="$$collapse $$collapse-plus bg-base-100 border-base-300 border">
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```
  

##### Force open

```html
<div tabindex="0" class="$$collapse $$collapse-open bg-base-100 border-base-300 border">
  <div class="$$collapse-title font-semibold">I have collapse-open class</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```
  

##### Force close

```html
<div tabindex="0" class="$$collapse $$collapse-close bg-base-100 border-base-300 border">
  <div class="$$collapse-title font-semibold">I have collapse-open class</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```
  

##### Custom colors for collapse that works with focus

```html
<div
  tabindex="0"
  class="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content $$collapse"
>
  <div class="$$collapse-title font-semibold">How do I create an account?</div>
  <div class="$$collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```
  

##### Custom colors for collapse that works with checkbox

```html
<div class="bg-base-100 border-base-300 $$collapse border">
  <input type="checkbox" class="peer" />
  <div
    class="$$collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
  >
    How do I create an account?
  </div>
  <div
    class="$$collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
  >
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```
  
  

### Countdown
Countdown Countdown gives you a transition effect when you change a number between 0 to 99.

#### usages

##### Countdown

```html
<span class="$$countdown">
  <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
</span>
```
  

##### Large text

```html
<span class="$$countdown font-mono text-6xl">
  <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
</span>
```
  

##### Clock countdown

```html
<span class="$$countdown font-mono text-2xl">
  <span style="--$$value:10;" aria-live="polite" aria-label="10">10</span>
  h
  <span style="--$$value:24;" aria-live="polite" aria-label="24">24</span>
  m
  <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
  s
</span>
```
  

##### Clock countdown with colons

```html
<span class="$$countdown font-mono text-2xl">
  <span style="--$$value:10;" aria-live="polite" aria-label="10">10</span>
  :
  <span style="--$$value:24;" aria-live="polite" aria-label="24">24</span>
  :
  <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
</span>
```
  

##### Large text with labels

```html
<div class="flex gap-5">
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--$$value:15;" aria-live="polite" aria-label="15">15</span>
    </span>
    days
  </div>
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--$$value:10;" aria-live="polite" aria-label="10">10</span>
    </span>
    hours
  </div>
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--$$value:24;" aria-live="polite" aria-label="24">24</span>
    </span>
    min
  </div>
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
    </span>
    sec
  </div>
</div>
```
  

##### Large text with labels under

```html
<div class="grid auto-cols-max grid-flow-col gap-5 text-center">
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:15;" aria-live="polite" aria-label="15">15</span>
    </span>
    days
  </div>
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:10;" aria-live="polite" aria-label="10">10</span>
    </span>
    hours
  </div>
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:24;" aria-live="polite" aria-label="24">24</span>
    </span>
    min
  </div>
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
    </span>
    sec
  </div>
</div>
```
  

##### In boxes

```html
<div class="grid auto-cols-max grid-flow-col gap-5 text-center">
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:15;" aria-live="polite" aria-label="15">15</span>
    </span>
    days
  </div>
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:10;" aria-live="polite" aria-label="10">10</span>
    </span>
    hours
  </div>
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:24;" aria-live="polite" aria-label="24">24</span>
    </span>
    min
  </div>
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
    </span>
    sec
  </div>
</div>
```
  
  

### Diff
Diff Diff component shows a side-by-side comparison of two items.

#### usages

##### Diff

```html
<figure class="$$diff aspect-16/9" tabindex="0">
  <div class="$$diff-item-1" role="img">
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </div>
  <div class="$$diff-item-2" role="img" tabindex="0">
    <img
      alt="daisy"
      src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
  </div>
  <div class="$$diff-resizer"></div>
</figure>
```
  

##### Diff text

```html
<figure class="$$diff aspect-16/9" tabindex="0">
  <div class="$$diff-item-1" role="img">
    <div class="bg-primary text-primary-content grid place-content-center text-9xl font-black">
      DAISY
    </div>
  </div>
  <div class="$$diff-item-2" role="img" tabindex="0">
    <div class="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
  </div>
  <div class="$$diff-resizer"></div>
</figure>
```
  
  

### Divider
Divider Divider will be used to separate content vertically or horizontally.

#### usages

##### Divider

```html
<div class="flex w-full flex-col">
  <div class="$$card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <div class="$$divider">OR</div>
  <div class="$$card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>
```
  

##### Divider horizontal

```html
<div class="flex w-full">
  <div class="$$card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
  <div class="$$divider $$divider-horizontal">OR</div>
  <div class="$$card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
</div>
```
  

##### Divider with no text

```html
<div class="flex w-full flex-col">
  <div class="$$card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <div class="$$divider"></div>
  <div class="$$card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>
```
  

##### responsive (lg:divider-horizontal)

```html
<div class="flex w-full flex-col lg:flex-row">
  <div class="$$card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
  <div class="$$divider lg:$$divider-horizontal">OR</div>
  <div class="$$card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
</div>
```
  

##### Divider with colors

```html
<div class="flex w-full flex-col">
  <div class="$$divider">Default</div>
  <div class="$$divider $$divider-neutral">Neutral</div>
  <div class="$$divider $$divider-primary">Primary</div>
  <div class="$$divider $$divider-secondary">Secondary</div>
  <div class="$$divider $$divider-accent">Accent</div>
  <div class="$$divider $$divider-success">Success</div>
  <div class="$$divider $$divider-warning">Warning</div>
  <div class="$$divider $$divider-info">Info</div>
  <div class="$$divider $$divider-error">Error</div>
</div>
```
  

##### Divider in different positions

```html
<div class="flex w-full flex-col">
  <div class="$$divider $$divider-start">Start</div>
  <div class="$$divider">Default</div>
  <div class="$$divider $$divider-end">End</div>
</div>
```
  

##### Divider in different positions (horizontal)

```html
<div class="flex w-full">
  <div class="$$divider $$divider-horizontal $$divider-start">Start</div>
  <div class="$$divider $$divider-horizontal">Default</div>
  <div class="$$divider $$divider-horizontal $$divider-end">End</div>
</div>
```
  
  

### Dock
Dock Dock (also know as Bottom navigation or Bottom bar) is a UI element that provides navigation options to the user. Dock sticks to the bottom of the screen.

#### usages

##### Dock

```html
<div class="$$dock">
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></line></g></svg>
    <span class="$$dock-label">Home</span>
  </button>
  
  <button class="$$dock-active">
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></rect></g></svg>
    <span class="$$dock-label">Inbox</span>
  </button>
  
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>
    <span class="$$dock-label">Settings</span>
  </button>
</div>
```
  

##### Dock Extra Small size

```html
<div class="$$dock $$dock-xs">
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></line></g></svg>
  </button>
  
  <button class="$$dock-active">
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></rect></g></svg>
  </button>
  
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>
  </button>
</div>
```
  

##### Dock Small size

```html
<div class="$$dock $$dock-sm">
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></line></g></svg>
  </button>
  
  <button class="$$dock-active">
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></rect></g></svg>
  </button>
  
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>
  </button>
</div>
```
  

##### Dock Medium size

```html
<div class="$$dock $$dock-md">
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></line></g></svg>
    <span class="$$dock-label">Home</span>
  </button>
  
  <button class="$$dock-active">
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></rect></g></svg>
    <span class="$$dock-label">Inbox</span>
  </button>
  
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>
    <span class="$$dock-label">Settings</span>
  </button>
</div>
```
  

##### Dock Large size

```html
<div class="$$dock $$dock-lg">
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></line></g></svg>
    <span class="$$dock-label">Home</span>
  </button>
  
  <button class="$$dock-active">
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></rect></g></svg>
    <span class="$$dock-label">Inbox</span>
  </button>
  
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>
    <span class="$$dock-label">Settings</span>
  </button>
</div>
```
  

##### Dock Extra Large size

```html
<div class="$$dock $$dock-xl">
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></line></g></svg>
    <span class="$$dock-label">Home</span>
  </button>
  
  <button class="$$dock-active">
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></rect></g></svg>
    <span class="$$dock-label">Inbox</span>
  </button>
  
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>
    <span class="$$dock-label">Settings</span>
  </button>
</div>
```
  

##### Dock with custom colors

```html
<div class="$$dock bg-neutral text-neutral-content">
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></line></g></svg>
    <span class="$$dock-label">Home</span>
  </button>
  
  <button class="$$dock-active">
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></rect></g></svg>
    <span class="$$dock-label">Inbox</span>
  </button>
  
  <button>
    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>
    <span class="$$dock-label">Settings</span>
  </button>
</div>
```
  
  

### Drawer
Drawer Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.

#### usages

##### Drawer

```html
<div class="$$drawer">
  <input id="my-drawer" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="$$btn $$btn-primary $$drawer-button">Open drawer</label>
  </div>
  <div class="$$drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```
  

##### Navbar menu for desktop + sidebar drawer for mobile

```html
<div class="$$drawer">
  <input id="my-drawer-3" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="$$navbar bg-base-300 w-full">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" aria-label="open sidebar" class="$$btn $$btn-square $$btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-6 w-6 stroke-current">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <div class="mx-2 flex-1 px-2">Navbar Title</div>
      <div class="hidden flex-none lg:block">
        <ul class="$$menu $$menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    Content
  </div>
  <div class="$$drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu bg-base-200 min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```
  

##### Responsive

```html
<div class="$$drawer lg:$$drawer-open">
  <input id="my-drawer-2" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="$$btn $$btn-primary $$drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div class="$$drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```
  

##### Drawer that opens from right side of page

```html
<div class="$$drawer $$drawer-end">
  <input id="my-drawer-4" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4" class="$$drawer-button $$btn $$btn-primary">Open drawer</label>
  </div>
  <div class="$$drawer-side">
    <label for="my-drawer-4" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```
  
  

### Dropdown
Dropdown Dropdown can open a menu or any other element when the button is clicked.

#### usages

##### Dropdown using details and summary

```html
<details class="$$dropdown">
  <summary class="$$btn m-1">open or close</summary>
  <ul class="$$menu $$dropdown-content bg-base-100 $$rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
```
  

##### Dropdown using popover API and anchor positioning

```html
<!-- change popover-1 and --anchor-1 names. Use unique names for each dropdown -->
<button class="$$btn" popovertarget="popover-1" style="anchor-name:--anchor-1">
  Button
</button>
<ul class="$$dropdown $$menu w-52 rounded-box bg-base-100 shadow-sm"
  popover id="popover-1" style="position-anchor:--anchor-1">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```
  

##### Dropdown menu

```html
<div class="$$dropdown">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown / aligns to start of button horizontally

```html
<div class="$$dropdown $$dropdown-start">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬇️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown / aligns to end of button horizontally

```html
<div class="$$dropdown $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click  ⬇️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown / aligns to center of button horizontally

```html
<div class="$$dropdown $$dropdown-center">
  <div tabindex="0" role="button" class="$$btn m-1">Click  ⬇️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown top

```html
<div class="$$dropdown $$dropdown-top">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬆️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown top / aligns to center of button horizontally

```html
<div class="$$dropdown $$dropdown-top $$dropdown-center">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬆️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown top / aligns to end of button horizontally

```html
<div class="$$dropdown $$dropdown-top $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬆️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown bottom (default)

```html
<div class="$$dropdown $$dropdown-bottom">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬇️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown bottom (default) / aligns to center of button horizontally

```html
<div class="$$dropdown $$dropdown-bottom $$dropdown-center">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬇️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown bottom (default) / aligns to end of button horizontally

```html
<div class="$$dropdown $$dropdown-bottom $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬇️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown left

```html
<div class="$$dropdown $$dropdown-left">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬅️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown left / aligns to center of button vertically

```html
<div class="$$dropdown $$dropdown-left $$dropdown-center">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬅️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown left / aligns to end of button vertically

```html
<div class="$$dropdown $$dropdown-left $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬅️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown right

```html
<div class="$$dropdown $$dropdown-right">
  <div tabindex="0" role="button" class="$$btn m-1">Click ➡️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown right / aligns to end of button vertically

```html
<div class="$$dropdown $$dropdown-right $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click ➡️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown right / aligns to center of button vertically

```html
<div class="$$dropdown $$dropdown-right $$dropdown-center">
  <div tabindex="0" role="button" class="$$btn m-1">Click ➡️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Dropdown on hover

```html
<div class="$$dropdown $$dropdown-hover">
  <div tabindex="0" role="button" class="$$btn m-1">Hover</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Force open

```html
<div class="$$dropdown $$dropdown-open">
  <div tabindex="0" role="button" class="$$btn m-1">Button</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
  

##### Card as dropdown

```html
<div class="$$dropdown">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <div
    tabindex="0"
    class="$$dropdown-content $$card $$card-sm bg-base-100 z-1 w-64 shadow-md">
    <div class="$$card-body">
      <p>This is a card. You can use any element as a dropdown.</p>
    </div>
  </div>
</div>
```
  

##### Dropdown in navbar

```html
<div class="$$navbar bg-base-200">
  <div class="ps-4">
    <a class="text-lg font-bold">daisyUI</a>
  </div>
  <div class="flex grow justify-end px-2">
    <div class="flex items-stretch">
      <a class="$$btn $$btn-ghost rounded-field">Button</a>
      <div class="$$dropdown $$dropdown-end">
        <div tabindex="0" role="button" class="$$btn $$btn-ghost rounded-field">Dropdown</div>
        <ul
          tabindex="0"
          class="$$menu $$dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```
  

##### Helper dropdown

```html
A normal text and a helper dropdown
<div class="$$dropdown $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn $$btn-circle $$btn-ghost $$btn-xs text-info">
    <svg
      tabindex="0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="h-4 w-4 stroke-current">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  </div>
  <div
    tabindex="0"
    class="$$card $$card-sm $$dropdown-content bg-base-100 rounded-box z-1 w-64 shadow-sm">
    <div tabindex="0" class="$$card-body">
      <h2 class="$$card-title">You needed more info?</h2>
      <p>Here is a description!</p>
    </div>
  </div>
</div>
```
  
  

### Fieldset
Fieldset Fieldset is a container for grouping related form elements. It includes fieldset-legend as a title and fieldset-label as a description.

#### usages

##### Fieldset fieldset-legend and fieldset-label

```html
<fieldset class="$$fieldset">
  <legend class="$$fieldset-legend">Page title</legend>
  <input type="text" class="$$input" placeholder="My awesome page" />
  <p class="$$fieldset-label">You can edit page title later on from settings</p>
</fieldset>
```
  

##### Fieldset with background and border

```html
<fieldset class="$$fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="$$fieldset-legend">Page title</legend>
  <input type="text" class="$$input" placeholder="My awesome page" />
  <p class="$$fieldset-label">You can edit page title later on from settings</p>
</fieldset>
```
  

##### Fieldset with multiple inputs

```html
<fieldset class="$$fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="$$fieldset-legend">Page details</legend>
  
  <label class="$$fieldset-label">Title</label>
  <input type="text" class="$$input" placeholder="My awesome page" />
  
  <label class="$$fieldset-label">Slug</label>
  <input type="text" class="$$input" placeholder="my-awesome-page" />
  
  <label class="$$fieldset-label">Author</label>
  <input type="text" class="$$input" placeholder="Name" />
</fieldset>
```
  

##### Fieldset with multiple join items

```html
<fieldset class="$$fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="$$fieldset-legend">Settings</legend>
  <div class="$$join">
    <input type="text" class="$$input $$join-item" placeholder="Product name" />
    <button class="$$btn $$join-item">save</button>
  </div>
</fieldset>
```
  

##### Login form with fieldset

```html
<fieldset class="$$fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend class="$$fieldset-legend">Login</legend>
  
  <label class="$$fieldset-label">Email</label>
  <input type="email" class="$$input" placeholder="Email" />
  
  <label class="$$fieldset-label">Password</label>
  <input type="password" class="$$input" placeholder="Password" />
  
  <button class="$$btn $$btn-neutral mt-4">Login</button>
</fieldset>
```
  
  

### File Input
File Input File Input is a an input field for uploading files.

#### usages

##### File input

```html
<input type="file" class="$$file-input" />
```
  

##### File input ghost

```html
<input type="file" class="$$file-input $$file-input-ghost" />
```
  

##### With fieldset and fieldset-label

```html
<fieldset class="$$fieldset">
  <legend class="$$fieldset-legend">Pick a file</legend>
  <input type="file" class="$$file-input" />
  <label class="$$fieldset-label">Max size 2MB</label>
</fieldset>
```
  

##### Sizes

```html
<input type="file" class="$$file-input $$file-input-xs" />

<input type="file" class="$$file-input $$file-input-sm" />

<input type="file" class="$$file-input $$file-input-md" />

<input type="file" class="$$file-input $$file-input-lg" />

<input type="file" class="$$file-input $$file-input-xl" />
```
  

##### Primary color

```html
<input type="file" class="$$file-input $$file-input-primary" />
<input type="file" class="$$file-input $$file-input-secondary" />
<input type="file" class="$$file-input $$file-input-accent" />
<input type="file" class="$$file-input $$file-input-neutral" />
<input type="file" class="$$file-input $$file-input-info" />
<input type="file" class="$$file-input $$file-input-success" />
<input type="file" class="$$file-input $$file-input-warning" />
<input type="file" class="$$file-input $$file-input-error" />
```
  

##### Disabled

```html
<input type="file" placeholder="You can't touch this" class="$$file-input" disabled />
```
  
  

### Filter
Filter Filter is a group of radio buttons. Choosing one of the options will hide the others and shows a reset button next to the chosen option.

#### usages

##### Filter using HTML form, radio buttons and reset button

```html
<form class="$$filter">
  <input class="$$btn $$btn-square" type="reset" value="×"/>
  <input class="$$btn" type="radio" name="frameworks" aria-label="Svelte"/>
  <input class="$$btn" type="radio" name="frameworks" aria-label="Vue"/>
  <input class="$$btn" type="radio" name="frameworks" aria-label="React"/>
</form>
```
  

##### Filter without HTML form

```html
<div class="$$filter">
  <input class="$$btn $$filter-reset" type="radio" name="metaframeworks" aria-label="All"/>
  <input class="$$btn" type="radio" name="metaframeworks" aria-label="Sveltekit"/>
  <input class="$$btn" type="radio" name="metaframeworks" aria-label="Nuxt"/>
  <input class="$$btn" type="radio" name="metaframeworks" aria-label="Next.js"/>
</div>
```
  
  

### Footer
Footer Footer can contain logo, copyright notice, and links to other pages.

#### usages

##### Footer (vertical be default, horizontal for sm and up)

```html
<footer class="$$footer sm:$$footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 class="$$footer-title">Services</h6>
    <a class="$$link $$link-hover">Branding</a>
    <a class="$$link $$link-hover">Design</a>
    <a class="$$link $$link-hover">Marketing</a>
    <a class="$$link $$link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Company</h6>
    <a class="$$link $$link-hover">About us</a>
    <a class="$$link $$link-hover">Contact</a>
    <a class="$$link $$link-hover">Jobs</a>
    <a class="$$link $$link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Legal</h6>
    <a class="$$link $$link-hover">Terms of use</a>
    <a class="$$link $$link-hover">Privacy policy</a>
    <a class="$$link $$link-hover">Cookie policy</a>
  </nav>
</footer>
```
  

##### Footer with a logo section

```html
<footer class="$$footer sm:$$footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      class="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 class="$$footer-title">Services</h6>
    <a class="$$link $$link-hover">Branding</a>
    <a class="$$link $$link-hover">Design</a>
    <a class="$$link $$link-hover">Marketing</a>
    <a class="$$link $$link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Company</h6>
    <a class="$$link $$link-hover">About us</a>
    <a class="$$link $$link-hover">Contact</a>
    <a class="$$link $$link-hover">Jobs</a>
    <a class="$$link $$link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Legal</h6>
    <a class="$$link $$link-hover">Terms of use</a>
    <a class="$$link $$link-hover">Privacy policy</a>
    <a class="$$link $$link-hover">Cookie policy</a>
  </nav>
</footer>
```
  

##### Footer with a form

```html
<footer class="$$footer sm:$$footer-horizontal bg-base-200 text-base-content p-10">
  <nav>
    <h6 class="$$footer-title">Services</h6>
    <a class="$$link $$link-hover">Branding</a>
    <a class="$$link $$link-hover">Design</a>
    <a class="$$link $$link-hover">Marketing</a>
    <a class="$$link $$link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Company</h6>
    <a class="$$link $$link-hover">About us</a>
    <a class="$$link $$link-hover">Contact</a>
    <a class="$$link $$link-hover">Jobs</a>
    <a class="$$link $$link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Legal</h6>
    <a class="$$link $$link-hover">Terms of use</a>
    <a class="$$link $$link-hover">Privacy policy</a>
    <a class="$$link $$link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 class="$$footer-title">Newsletter</h6>
    <fieldset class="w-80">
      <label>Enter your email address</label>
      <div class="$$join">
        <input
          type="text"
          placeholder="username@site.com"
          class="$$input $$input-bordered $$join-item" />
        <button class="$$btn $$btn-primary $$join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
```
  

##### Footer with logo and social icons

```html
<footer class="$$footer $$sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      class="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 class="$$footer-title">Social</h6>
    <div class="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
```
  

##### Footer with copyright text

```html
<footer class="$$footer $$sm:footer-horizontal $$footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
```
  

##### Footer with copyright text and social icons

```html
<footer class="$$footer sm:$$footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside class="grid-flow-col items-center">
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      class="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
</footer>
```
  

##### Footer with links and social icons

```html
<footer class="$$footer sm:$$footer-horizontal bg-base-300 text-base-content p-10">
  <nav>
    <h6 class="$$footer-title">Services</h6>
    <a class="$$link $$link-hover">Branding</a>
    <a class="$$link $$link-hover">Design</a>
    <a class="$$link $$link-hover">Marketing</a>
    <a class="$$link $$link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Company</h6>
    <a class="$$link $$link-hover">About us</a>
    <a class="$$link $$link-hover">Contact</a>
    <a class="$$link $$link-hover">Jobs</a>
    <a class="$$link $$link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Social</h6>
    <div class="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
```
  

##### Footer with 2 rows

```html
<footer class="$$footer sm:$$footer-horizontal bg-neutral text-neutral-content grid-rows-2 p-10">
  <nav>
    <h6 class="$$footer-title">Services</h6>
    <a class="$$link $$link-hover">Branding</a>
    <a class="$$link $$link-hover">Design</a>
    <a class="$$link $$link-hover">Marketing</a>
    <a class="$$link $$link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Company</h6>
    <a class="$$link $$link-hover">About us</a>
    <a class="$$link $$link-hover">Contact</a>
    <a class="$$link $$link-hover">Jobs</a>
    <a class="$$link $$link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Legal</h6>
    <a class="$$link $$link-hover">Terms of use</a>
    <a class="$$link $$link-hover">Privacy policy</a>
    <a class="$$link $$link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Social</h6>
    <a class="$$link $$link-hover">Twitter</a>
    <a class="$$link $$link-hover">Instagram</a>
    <a class="$$link $$link-hover">Facebook</a>
    <a class="$$link $$link-hover">GitHub</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Explore</h6>
    <a class="$$link $$link-hover">Features</a>
    <a class="$$link $$link-hover">Enterprise</a>
    <a class="$$link $$link-hover">Security</a>
    <a class="$$link $$link-hover">Pricing</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Apps</h6>
    <a class="$$link $$link-hover">Mac</a>
    <a class="$$link $$link-hover">Windows</a>
    <a class="$$link $$link-hover">iPhone</a>
    <a class="$$link $$link-hover">Android</a>
  </nav>
</footer>
```
  

##### Centered footer with logo and social icons

```html
<footer class="$$footer $$footer-horizontal $$footer-center bg-primary text-primary-content p-10">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      class="inline-block fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p class="font-bold">
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div class="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
```
  

##### Centered footer with social icons

```html
<footer class="$$footer $$footer-horizontal $$footer-center bg-base-200 text-base-content rounded p-10">
  <nav class="grid grid-flow-col gap-4">
    <a class="$$link $$link-hover">About us</a>
    <a class="$$link $$link-hover">Contact</a>
    <a class="$$link $$link-hover">Jobs</a>
    <a class="$$link $$link-hover">Press kit</a>
  </nav>
  <nav>
    <div class="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
```
  

##### Two footer

```html
<footer class="$$footer sm:$$footer-horizontal bg-base-200 text-base-content p-10">
  <nav>
    <h6 class="$$footer-title">Services</h6>
    <a class="$$link $$link-hover">Branding</a>
    <a class="$$link $$link-hover">Design</a>
    <a class="$$link $$link-hover">Marketing</a>
    <a class="$$link $$link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Company</h6>
    <a class="$$link $$link-hover">About us</a>
    <a class="$$link $$link-hover">Contact</a>
    <a class="$$link $$link-hover">Jobs</a>
    <a class="$$link $$link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 class="$$footer-title">Legal</h6>
    <a class="$$link $$link-hover">Terms of use</a>
    <a class="$$link $$link-hover">Privacy policy</a>
    <a class="$$link $$link-hover">Cookie policy</a>
  </nav>
</footer>
<footer class="$$footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
  <aside class="grid-flow-col items-center">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      class="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav class="md:place-self-center md:justify-self-end">
    <div class="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
```
  
  

### Hero
Hero Hero is a component for displaying a large box or image with a title and description.

#### usages

##### Centered hero

```html
<div class="$$hero bg-base-200 min-h-screen">
  <div class="$$hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>
```
  

##### Hero with figure

```html
<div class="$$hero bg-base-200 min-h-screen">
  <div class="$$hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>
```
  

##### Hero with figure but reverse order

```html
<div class="$$hero bg-base-200 min-h-screen">
  <div class="$$hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>
```
  

##### Hero with form

```html
<div class="$$hero bg-base-200 min-h-screen">
  <div class="$$hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div class="$$card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div class="$$card-body">
        <fieldset class="$$fieldset">
          <label class="$$fieldset-label">Email</label>
          <input type="email" class="$$input" placeholder="Email" />
          <label class="$$fieldset-label">Password</label>
          <input type="password" class="$$input" placeholder="Password" />
          <div><a class="$$link $$link-hover">Forgot password?</a></div>
          <button class="$$btn $$btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
```
  

##### Hero with overlay image

```html
<div
  class="$$hero min-h-screen"
  style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
  <div class="$$hero-overlay"></div>
  <div class="$$hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="$$btn $$btn-primary">Get Started</button>
    </div>
  </div>
</div>
```
  
  

### Indicator
Indicator Indicators are used to place an element on the corner of another element.

#### usages

##### Status Indicator

```html
<div class="$$indicator">
  <span class="$$indicator-item $$status $$status-success"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
  

##### Badge as indicator

```html
<div class="$$indicator">
  <span class="$$indicator-item $$badge $$badge-primary">New</span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
  

##### for button

```html
<div class="$$indicator">
  <span class="$$indicator-item $$badge $$badge-secondary">12</span>
  <button class="$$btn">inbox</button>
</div>
```
  

##### for tab

```html
<div class="$$tabs $$tabs-lift">
  <a class="$$tab">Messages</a>
  <a class="$$indicator $$tab $$tab-active">
    Notifications
    <span class="$$indicator-item $$badge">8</span>
  </a>
  <a class="$$tab">Requests</a>
</div>
```
  

##### for avatar

```html
<div class="$$avatar $$indicator">
  <span class="$$indicator-item $$badge $$badge-secondary">Online</span>
  <div class="h-20 w-20 rounded-lg">
    <img
      alt="Tailwind CSS examples"
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```
  

##### for an input

```html
<div class="$$indicator">
  <span class="$$indicator-item $$badge">Required</span>
  <input type="text" placeholder="Your email address" class="$$input $$input-bordered" />
</div>
```
  

##### A button as an indicator for a card

```html
<div class="$$indicator">
  <div class="$$indicator-item $$indicator-bottom">
    <button class="$$btn $$btn-primary">Apply</button>
  </div>
  <div class="$$card border border-base-300 shadow-sm">
    <div class="$$card-body">
      <h2 class="$$card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</div>
```
  

##### in center of an image

```html
<div class="$$indicator">
  <span class="$$indicator-item $$indicator-center $$indicator-middle">
    Only available for Pro users
  </span>
  <img
    alt="Tailwind CSS examples"
    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
</div>
```
  

##### indicator-top (default) indicator-start

```html
<div class="$$indicator">
  <span class="$$indicator-item $$indicator-start $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
  

##### indicator-top (default) indicator-center

```html
<div class="$$indicator">
  <span class="$$indicator-item $$indicator-center $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
  

##### indicator-top (default) indicator-end (default)

```html
<div class="$$indicator">
  <span class="$$indicator-item $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
  

##### indicator-middle indicator-start

```html
<div class="$$indicator">
  <span
    class="$$indicator-item $$indicator-middle $$indicator-start $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
  

##### indicator-middle indicator-center

```html
<div class="$$indicator">
  <span
    class="$$indicator-item $$indicator-middle $$indicator-center $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
  

##### indicator-middle indicator-end (default)

```html
<div class="$$indicator">
  <span class="$$indicator-item $$indicator-middle $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
  

##### indicator-bottom indicator-start

```html
<div class="$$indicator">
  <span
    class="$$indicator-item $$indicator-bottom $$indicator-start $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
  

##### indicator-bottom indicator-center

```html
<div class="$$indicator">
  <span
    class="$$indicator-item $$indicator-bottom $$indicator-center $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
  

##### indicator-bottom indicator-end (default)

```html
<div class="$$indicator">
  <span class="$$indicator-item $$indicator-bottom $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
  

##### multiple indicators

```html
<div class="$$indicator">
  <span class="$$indicator-item $$indicator-top $$indicator-start $$badge">↖︎</span>
  <span class="$$indicator-item $$indicator-top $$indicator-center $$badge">↑</span>
  <span class="$$indicator-item $$indicator-top $$indicator-end $$badge">↗︎</span>
  <span class="$$indicator-item $$indicator-middle $$indicator-start $$badge">←</span>
  <span class="$$indicator-item $$indicator-middle $$indicator-center $$badge">●</span>
  <span class="$$indicator-item $$indicator-middle $$indicator-end $$badge">→</span>
  <span class="$$indicator-item $$indicator-bottom $$indicator-start $$badge">↙︎</span>
  <span class="$$indicator-item $$indicator-bottom $$indicator-center $$badge">↓</span>
  <span class="$$indicator-item $$indicator-bottom $$indicator-end $$badge">↘︎</span>
  <div class="bg-base-300 grid h-32 w-60 place-items-center">Box</div>
</div>
```
  

##### Responsive

```html
<div class="$$indicator">
  <span
    class="$$indicator-item $$indicator-start sm:$$indicator-middle md:$$indicator-bottom lg:$$indicator-center xl:$$indicator-end $$badge $$badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
  
  

### Text Input
Text Input Text Input is a simple input field.

#### usages

##### Text input

```html
<input type="text" placeholder="Type here" class="$$input" />
```
  

##### Text input with text label inside

```html
<label class="$$input">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
  <input type="search" class="grow" placeholder="Search" />
  <kbd class="$$kbd $$kbd-sm">⌘</kbd>
  <kbd class="$$kbd $$kbd-sm">K</kbd>
</label>
<label class="$$input">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></g></svg>
  <input type="text" class="grow" placeholder="index.php" />
</label>
<label class="$$input">
  Path
  <input type="text" class="grow" placeholder="src/app/" />
  <span class="$$badge $$badge-neutral $$badge-xs">Optional</span>
</label>
```
  

##### Ghost style

```html
<input type="text" placeholder="Type here" class="$$input $$input-ghost" />
```
  

##### With fieldset and fieldset-legend

```html
<fieldset class="$$fieldset">
  <legend class="$$fieldset-legend">What is your name?</legend>
  <input type="text" class="$$input" placeholder="Type here" />
  <p class="$$fieldset-label">Optional</p>
</fieldset>
```
  

##### Input colors

```html
<input type="text" placeholder="neutral" class="$$input $$input-neutral" />
<input type="text" placeholder="Primary" class="$$input $$input-primary" />
<input type="text" placeholder="Secondary" class="$$input $$input-secondary" />
<input type="text" placeholder="Accent" class="$$input $$input-accent" />

<input type="text" placeholder="Info" class="$$input $$input-info" />
<input type="text" placeholder="Success" class="$$input $$input-success" />
<input type="text" placeholder="Warning" class="$$input $$input-warning" />
<input type="text" placeholder="Error" class="$$input $$input-error" />
```
  

##### Sizes

```html
<input type="text" placeholder="Xsmall" class="$$input $$input-xs" />
<input type="text" placeholder="Small" class="$$input $$input-sm" />
<input type="text" placeholder="Medium" class="$$input $$input-md" />
<input type="text" placeholder="Large" class="$$input $$input-lg" />
<input type="text" placeholder="Xlarge" class="$$input $$input-xl" />
```
  

##### Disabled

```html
<input type="text" placeholder="You can't touch this" class="$$input" disabled />
```
  

##### Text input with data list suggestion

```html
<input type="text" class="$$input" placeholder="Which browser do you use" list="browsers"/>
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Opera">
  <option value="Edge">
</datalist>
```
  

##### Date input

```html
<input type="date" class="$$input"/>
```
  

##### Time input

```html
<input type="time" class="$$input"/>
```
  

##### datetime-local input

```html
<input type="datetime-local" class="$$input"/>
```
  

##### Username text input with icon and validator

```html
<label class="$$input $$validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
  <input type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
</label>
<p class="$$validator-hint">
  Must be 3 to 30 characters
  <br/>containing only letters, numbers or dash
</p>
```
  

##### Search input with icon

```html
<label class="$$input">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
  <input type="search" required placeholder="Search"/>
</label>
```
  

##### Email input with icon and validator

```html
<label class="$$input $$validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  <input type="email" placeholder="mail@site.com" required/>
</label>
<div class="$$validator-hint hidden">Enter valid email address</div>
```
  

##### Email input with icon, validator, button, join

```html
<div class="$$join">
  <div>
    <label class="$$input $$validator $$join-item">
      <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
      <input type="email" placeholder="mail@site.com" required/>
    </label>
    <div class="$$validator-hint hidden">Enter valid email address</div>
  </div>
  <button class="$$btn $$btn-neutral $$join-item">Join</button>
</div>
```
  

##### Password input with icon and validator

```html
<label class="$$input $$validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
  <input type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
</label>
<p class="$$validator-hint hidden">
  Must be more than 8 characters, including
  <br/>At least one number
  <br/>At least one lowercase letter
  <br/>At least one uppercase letter
</p>
```
  

##### Number input with validator

```html
<input type="number" class="$$input $$validator" required placeholder="Type a number between 1 to 10" 
min="1" max="10" title="Must be between be 1 to 10" />
<p class="$$validator-hint">Must be between be 1 to 10</p>
```
  

##### Telephone number input with icon and validator

```html
<label class="$$input $$validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none"><path d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z" fill="currentColor"></path></g></svg>
  <input type="tel" class="tabular-nums" required placeholder="Phone" pattern="[0-9]*" minlength="10" maxlength="10" title="Must be 10 digits" />
</label>
<p class="$$validator-hint">Must be 10 digits</p>
```
  

##### URL with icon and validator

```html
<label class="$$input $$validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></g></svg>
  <input type="url" required placeholder="https://" value="https://" pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$" title="Must be valid URL" />
</label>
<p class="$$validator-hint">Must be valid URL</p>
```
  
  

### Join
Join Join is a container for grouping multiple items, it can be used to group buttons, inputs, etc. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.

#### usages

##### Join

```html
<div class="$$join">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>
```
  

##### Group items vertically

```html
<div class="$$join $$join-vertical">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>
```
  

##### Responsive: it's vertical on small screen and horizontal on large screen

```html
<div class="$$join $$join-vertical lg:$$join-horizontal">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>
```
  

##### With extra elements in the group

```html
<div class="$$join">
  <div>
    <div>
      <input class="$$input $$join-item" placeholder="Search" />
    </div>
  </div>
  <select class="$$select $$join-item">
    <option disabled selected>Filter</option>
    <option>Sci-fi</option>
    <option>Drama</option>
    <option>Action</option>
  </select>
  <div class="$$indicator">
    <span class="$$indicator-item $$badge $$badge-secondary">new</span>
    <button class="$$btn $$join-item">Search</button>
  </div>
</div>
```
  

##### Custom border radius

```html
<div class="$$join">
  <input class="$$input $$join-item" placeholder="Email" />
  <button class="$$btn $$join-item rounded-r-full">Subscribe</button>
</div>
```
  

##### Join radio inputs with btn style

```html
<div class="$$join">
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 1" />
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 2" />
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 3" />
</div>
```
  
  

### Kbd
Kbd Kbd is used to display keyboard shortcuts.

#### usages

##### Kbd

```html
<kbd class="$$kbd">K</kbd>
```
  

##### Kbd sizes

```html
<kbd class="$$kbd $$kbd-xs">Xsmall</kbd>
<kbd class="$$kbd $$kbd-sm">Small</kbd>
<kbd class="$$kbd $$kbd-md">Medium</kbd>
<kbd class="$$kbd $$kbd-lg">Large</kbd>
<kbd class="$$kbd $$kbd-xl">Xlarge</kbd>
```
  

##### In text

```html
Press
<kbd class="$$kbd $$kbd-sm">F</kbd>
to pay respects.
```
  

##### Key combination

```html
<kbd class="$$kbd">ctrl</kbd>
+
<kbd class="$$kbd">shift</kbd>
+
<kbd class="$$kbd">del</kbd>
```
  

##### Function Keys

```html
<kbd class="$$kbd">⌘</kbd>
<kbd class="$$kbd">⌥</kbd>
<kbd class="$$kbd">⇧</kbd>
<kbd class="$$kbd">⌃</kbd>
```
  

##### A full keyboard

```html
<div class="my-1 flex w-full justify-center gap-1">
  <kbd class="$$kbd">q</kbd>
  <kbd class="$$kbd">w</kbd>
  <kbd class="$$kbd">e</kbd>
  <kbd class="$$kbd">r</kbd>
  <kbd class="$$kbd">t</kbd>
  <kbd class="$$kbd">y</kbd>
  <kbd class="$$kbd">u</kbd>
  <kbd class="$$kbd">i</kbd>
  <kbd class="$$kbd">o</kbd>
  <kbd class="$$kbd">p</kbd>
</div>
<div class="my-1 flex w-full justify-center gap-1">
  <kbd class="$$kbd">a</kbd>
  <kbd class="$$kbd">s</kbd>
  <kbd class="$$kbd">d</kbd>
  <kbd class="$$kbd">f</kbd>
  <kbd class="$$kbd">g</kbd>
  <kbd class="$$kbd">h</kbd>
  <kbd class="$$kbd">j</kbd>
  <kbd class="$$kbd">k</kbd>
  <kbd class="$$kbd">l</kbd>
</div>
<div class="my-1 flex w-full justify-center gap-1">
  <kbd class="$$kbd">z</kbd>
  <kbd class="$$kbd">x</kbd>
  <kbd class="$$kbd">c</kbd>
  <kbd class="$$kbd">v</kbd>
  <kbd class="$$kbd">b</kbd>
  <kbd class="$$kbd">n</kbd>
  <kbd class="$$kbd">m</kbd>
  <kbd class="$$kbd">/</kbd>
</div>
```
  

##### Arrow Keys

```html
<div class="flex w-full justify-center">
  <kbd class="$$kbd">▲</kbd>
</div>
<div class="flex w-full justify-center gap-12">
  <kbd class="$$kbd">◀︎</kbd>
  <kbd class="$$kbd">▶︎</kbd>
</div>
<div class="flex w-full justify-center">
  <kbd class="$$kbd">▼</kbd>
</div>
```
  
  

### Label
Label Label is used to provide a name or title for an input field. Label can be placed before or after the field.

#### usages

##### Label for input

```html
<label class="$$input">
  <span class="$$label">https://</span>
  <input type="text" placeholder="URL" />
</label>
```
  

##### Label for input at the end

```html
<label class="$$input">
  <input type="text" placeholder="domain name" />
  <span class="$$label">.com</span>
</label>
```
  

##### Label for select

```html
<label class="$$select">
  <span class="$$label">Type</span>
  <select>
    <option>Personal</option>
    <option>Business</option>
  </select>
</label>
```
  

##### Label for date input

```html
<label class="$$input">
  <span class="$$label">Publish date</span>
  <input type="date" />
</label>
```
  

##### Floating Label

```html
<label class="$$floating-label">
  <span>Your Email</span>
  <input type="text" placeholder="mail@site.com" class="$$input $$input-md" />
</label>
```
  

##### Floating Label with Different Sizes

```html
<label class="$$floating-label">
  <input type="text" placeholder="Extra Small" class="$$input $$input-xs" />
  <span>Extra Small</span>
</label>
<label class="$$floating-label">
  <input type="text" placeholder="Small" class="$$input $$input-sm" />
  <span>Small</span>
</label>
<label class="$$floating-label">
  <input type="text" placeholder="Medium" class="$$input $$input-md" />
  <span>Medium</span>
</label>
<label class="$$floating-label">
  <input type="text" placeholder="Large" class="$$input $$input-lg" />
  <span>Large</span>
</label>
<label class="$$floating-label">
  <input type="text" placeholder="Extra Large" class="$$input $$input-xl" />
  <span>Extra Large</span>
</label>
```
  
  

### Link
Link Link adds the missing underline style to links.

#### usages

##### Link

```html
<a class="$$link">Click me</a>
```
  

##### Link

```html
<p>
  Tailwind CSS resets the style of links by default.
  <br />
  Add "link" class to make it look like a
  <a class="$$link">normal link</a>
  again.
</p>
```
  

##### Primary color

```html
<a class="$$link $$link-primary">Click me</a>
```
  

##### Secondary color

```html
<a class="$$link $$link-secondary">Click me</a>
```
  

##### Accent color

```html
<a class="$$link $$link-accent">Click me</a>
```
  

##### Neutral color

```html
<a class="$$link $$link-neutral">Click me</a>
```
  

##### Success color

```html
<a class="$$link $$link-success">Click me</a>
```
  

##### Info color

```html
<a class="$$link $$link-info">Click me</a>
```
  

##### Warning color

```html
<a class="$$link $$link-warning">Click me</a>
```
  

##### Error color

```html
<a class="$$link $$link-error">Click me</a>
```
  

##### Show underline only on hover

```html
<a class="$$link $$link-hover">Click me</a>
```
  
  

### List
List List is a vertical layout to display information in rows.

#### usages

##### List (second column grows - default)

```html
<ul class="$$list bg-base-100 rounded-box shadow-md">
  
  <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
  
  <li class="$$list-row">
    <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
    <div>
      <div>Dio Lupa</div>
      <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
    </div>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  
  <li class="$$list-row">
    <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
    <div>
      <div>Ellie Beilish</div>
      <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
    </div>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  
  <li class="$$list-row">
    <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
    <div>
      <div>Sabrino Gardener</div>
      <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
    </div>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  
</ul>
```
  

##### List (third column grows)

```html
<ul class="$$list bg-base-100 rounded-box shadow-md">
  
  <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
  
  <li class="$$list-row">
    <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
    <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
    <div class="$$list-col-grow">
      <div>Dio Lupa</div>
      <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
    </div>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
  </li>
  
  <li class="$$list-row">
    <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
    <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
    <div class="$$list-col-grow">
      <div>Ellie Beilish</div>
      <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
    </div>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
  </li>
  
  <li class="$$list-row">
    <div class="text-4xl font-thin opacity-30 tabular-nums">03</div>
    <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
    <div class="$$list-col-grow">
      <div>Sabrino Gardener</div>
      <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
    </div>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
  </li>
  
</ul>
```
  

##### List (third column wraps to next row)

```html
<ul class="$$list bg-base-100 rounded-box shadow-md">
  
  <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
  
  <li class="$$list-row">
    <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
    <div>
      <div>Dio Lupa</div>
      <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
    </div>
    <p class="$$list-col-wrap text-xs">
      "Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.
    </p>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  
  <li class="$$list-row">
    <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
    <div>
      <div>Ellie Beilish</div>
      <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
    </div>
    <p class="$$list-col-wrap text-xs">
      "Bears of a Fever" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim.
    </p>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  
  <li class="$$list-row">
    <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
    <div>
      <div>Sabrino Gardener</div>
      <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
    </div>
    <p class="$$list-col-wrap text-xs">
      "Cappuccino" quickly gained attention for its smooth melody and relatable themes. The song’s success propelled Sabrino into the spotlight, solidifying their status as a rising star.
    </p>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  
</ul>
```
  
  

### Loading
Loading Loading shows an animation to indicate that something is loading.

#### usages

##### Loading spinner

```html
<span class="$$loading $$loading-spinner $$loading-xs"></span>
<span class="$$loading $$loading-spinner $$loading-sm"></span>
<span class="$$loading $$loading-spinner $$loading-md"></span>
<span class="$$loading $$loading-spinner $$loading-lg"></span>
<span class="$$loading $$loading-spinner $$loading-xl"></span>
```
  

##### Loading dots

```html
<span class="$$loading $$loading-dots $$loading-xs"></span>
<span class="$$loading $$loading-dots $$loading-sm"></span>
<span class="$$loading $$loading-dots $$loading-md"></span>
<span class="$$loading $$loading-dots $$loading-lg"></span>
<span class="$$loading $$loading-dots $$loading-xl"></span>
```
  

##### Loading ring

```html
<span class="$$loading $$loading-ring $$loading-xs"></span>
<span class="$$loading $$loading-ring $$loading-sm"></span>
<span class="$$loading $$loading-ring $$loading-md"></span>
<span class="$$loading $$loading-ring $$loading-lg"></span>
<span class="$$loading $$loading-ring $$loading-xl"></span>
```
  

##### Loading ball

```html
<span class="$$loading $$loading-ball $$loading-xs"></span>
<span class="$$loading $$loading-ball $$loading-sm"></span>
<span class="$$loading $$loading-ball $$loading-md"></span>
<span class="$$loading $$loading-ball $$loading-lg"></span>
<span class="$$loading $$loading-ball $$loading-xl"></span>
```
  

##### Loading bars

```html
<span class="$$loading $$loading-bars $$loading-xs"></span>
<span class="$$loading $$loading-bars $$loading-sm"></span>
<span class="$$loading $$loading-bars $$loading-md"></span>
<span class="$$loading $$loading-bars $$loading-lg"></span>
<span class="$$loading $$loading-bars $$loading-xl"></span>
```
  

##### Loading infinity

```html
<span class="$$loading $$loading-infinity $$loading-xs"></span>
<span class="$$loading $$loading-infinity $$loading-sm"></span>
<span class="$$loading $$loading-infinity $$loading-md"></span>
<span class="$$loading $$loading-infinity $$loading-lg"></span>
<span class="$$loading $$loading-infinity $$loading-xl"></span>
```
  

##### Loading with colors

```html
<span class="$$loading $$loading-spinner text-primary"></span>
<span class="$$loading $$loading-spinner text-secondary"></span>
<span class="$$loading $$loading-spinner text-accent"></span>
<span class="$$loading $$loading-spinner text-neutral"></span>
<span class="$$loading $$loading-spinner text-info"></span>
<span class="$$loading $$loading-spinner text-success"></span>
<span class="$$loading $$loading-spinner text-warning"></span>
<span class="$$loading $$loading-spinner text-error"></span>
```
  
  

### Mask
Mask Mask crops the content of the element to common shapes.

#### usages

##### Squircle

```html
<img
  class="$$mask $$mask-squircle"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Heart

```html
<img
  class="$$mask $$mask-heart"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Hexagon

```html
<img
  class="$$mask $$mask-hexagon"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Hexagon-2 (horizontal hexagon)

```html
<img
  class="$$mask $$mask-hexagon-2"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Decagon

```html
<img
  class="$$mask $$mask-decagon"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Pentagon

```html
<img
  class="$$mask $$mask-pentagon"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Diamond

```html
<img
  class="$$mask $$mask-diamond"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Square

```html
<img
  class="$$mask $$mask-square"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Circle

```html
<img
  class="$$mask $$mask-circle"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Star

```html
<img
  class="$$mask $$mask-star"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Star-2 (bold star)

```html
<img
  class="$$mask $$mask-star-2"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Triangle (pointing top)

```html
<img
  class="$$mask $$mask-triangle"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Triangle-2 (pointing down)

```html
<img
  class="$$mask $$mask-triangle-2"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Triangle-3 (pointing left)

```html
<img
  class="$$mask $$mask-triangle-3"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  

##### Triangle-4 (pointing right)

```html
<img
  class="$$mask $$mask-triangle-4"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
```
  
  

### Menu
Menu Menu is used to display a list of links vertically or horizontally.

#### usages

##### Menu

```html
<ul class="$$menu bg-base-200 $$rounded-box w-56">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
```
  

##### Responsive: vertical on small screen, horizontal on large screen

```html
<ul class="$$menu $$menu-vertical lg:$$menu-horizontal bg-base-200 $$rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
```
  

##### Menu with icon only

```html
<ul class="$$menu bg-base-200 $$rounded-box">
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </a>
  </li>
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </a>
  </li>
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </a>
  </li>
</ul>
```
  

##### Menu with icon only (horizontal)

```html
<ul class="$$menu $$menu-horizontal bg-base-200 $$rounded-box">
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </a>
  </li>
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </a>
  </li>
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </a>
  </li>
</ul>
```
  

##### Menu with icon only with tooltip

```html
<ul class="$$menu bg-base-200 $$rounded-box">
  <li>
    <a class="$$tooltip $$tooltip-right" data-tip="Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </a>
  </li>
  <li>
    <a class="$$tooltip $$tooltip-right" data-tip="Details">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </a>
  </li>
  <li>
    <a class="$$tooltip $$tooltip-right" data-tip="Stats">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </a>
  </li>
</ul>
```
  

##### Menu with icon only (horizontal) with tooltip

```html
<ul class="$$menu $$menu-horizontal bg-base-200 $$rounded-box mt-6">
  <li>
    <a class="$$tooltip" data-tip="Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </a>
  </li>
  <li>
    <a class="$$tooltip" data-tip="Details">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </a>
  </li>
  <li>
    <a class="$$tooltip" data-tip="Stats">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </a>
  </li>
</ul>
```
  

##### Menu sizes

```html
<ul class="$$menu $$menu-xs bg-base-200 $$rounded-box w-56">
  <li><a>Xsmall 1</a></li>
  <li><a>Xsmall 2</a></li>
</ul>
<ul class="$$menu $$menu-sm bg-base-200 $$rounded-box w-56">
  <li><a>Small 1</a></li>
  <li><a>Small 2</a></li>
</ul>
<ul class="$$menu $$menu-md bg-base-200 $$rounded-box w-56">
  <li><a>Medium 1</a></li>
  <li><a>Medium 2</a></li>
</ul>
<ul class="$$menu $$menu-lg bg-base-200 $$rounded-box w-56">
  <li><a>Large 1</a></li>
  <li><a>Large 2</a></li>
</ul>
<ul class="$$menu $$menu-xl bg-base-200 $$rounded-box w-56">
  <li><a>Xlarge 1</a></li>
  <li><a>Xlarge 2</a></li>
</ul>
```
  

##### Menu with disabled items

```html
<ul class="$$menu bg-base-200 $$rounded-box w-56">
  <li><a>Enabled item</a></li>
  <li class="$$menu-disabled"><a>disabled item</a></li>
  <li class="$$menu-disabled"><a>disabled item</a></li>
</ul>
```
  

##### Menu with icons

```html
<ul class="$$menu bg-base-200 $$rounded-box w-56">
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      Item 2
    </a>
  </li>
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Item 1
    </a>
  </li>
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      Item 3
    </a>
  </li>
</ul>
```
  

##### Menu with icons and badge (responsive)

```html
<ul class="$$menu bg-base-200 lg:$$menu-horizontal $$rounded-box">
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      Inbox
      <span class="$$badge $$badge-xs">99+</span>
    </a>
  </li>
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Updates
      <span class="$$badge $$badge-xs $$badge-warning">NEW</span>
    </a>
  </li>
  <li>
    <a>
      Stats
      <span class="$$badge $$badge-xs $$badge-info"></span>
    </a>
  </li>
</ul>
```
  

##### Menu without padding and border radius

```html
<ul class="$$menu bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
```
  

##### Menu with title

```html
<ul class="$$menu bg-base-200 $$rounded-box w-56">
  <li class="$$menu-title">Title</li>
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
```
  

##### Menu with title as a parent

```html
<ul class="$$menu bg-base-200 $$rounded-box w-56">
  <li>
    <h2 class="$$menu-title">Title</h2>
    <ul>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </li>
</ul>
```
  

##### Submenu

```html
<ul class="$$menu bg-base-200 $$rounded-box w-56">
  <li><a>Item 1</a></li>
  <li>
    <a>Parent</a>
    <ul>
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
      <li>
        <a>Parent</a>
        <ul>
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a>Item 3</a></li>
</ul>
```
  

##### Collapsible submenu

```html
<ul class="$$menu bg-base-200 $$rounded-box w-56">
  <li><a>Item 1</a></li>
  <li>
    <details open>
      <summary>Parent</summary>
      <ul>
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li><a>Item 3</a></li>
</ul>
```
  

##### Collapsible submenu that works with class names

```html
<ul class="$$menu bg-base-200 $$rounded-box w-56">
  <li><a>Item 1</a></li>
  <li>
    <span class="$$menu-dropdown-toggle">Parent</span>
    <ul class="$$menu-dropdown">
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
    </ul>
  </li>
</ul>
<ul class="$$menu bg-base-200 rounded-box w-56">
  <li><a>Item 1</a></li>
  <li>
    <span class="$$menu-dropdown-toggle $$menu-dropdown-show">Parent</span>
    <ul class="$$menu-dropdown $$menu-dropdown-show">
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
    </ul>
  </li>
</ul>
```
  

##### File tree

```html
<ul class="$$menu $$menu-xs bg-base-200 rounded-box max-w-xs w-full">
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
      resume.pdf
    </a>
  </li>
  <li>
    <details open>
      <summary>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
        My Files
      </summary>
      <ul>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            Project-final.psd
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            Project-final-2.psd
          </a>
        </li>
        <li>
          <details open>
            <summary>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
              </svg>
              Images
            </summary>
            <ul>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  Screenshot1.png
                </a>
              </li>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  Screenshot2.png
                </a>
              </li>
              <li>
                <details open>
                  <summary>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                    Others
                  </summary>
                  <ul>
                    <li>
                      <a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-4 w-4">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        Screenshot3.png
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
      reports-final-2.pdf
    </a>
  </li>
</ul>
```
  

##### Menu with active item

```html
<ul class="$$menu bg-base-200 w-56">
  <li><a>Item 1</a></li>
  <li><a class="$$menu-active">Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
```
  

##### Horizontal menu

```html
<ul class="$$menu $$menu-horizontal bg-base-200">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
```
  

##### Horizontal submenu

```html
<ul class="$$menu $$menu-horizontal bg-base-200 $$rounded-box">
  <li><a>Item 1</a></li>
  <li>
    <a>Parent</a>
    <ul>
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
    </ul>
  </li>
  <li><a>Item 3</a></li>
</ul>
```
  

##### Mega menu with submenu (responsive)

```html
<ul class="$$menu xl:$$menu-horizontal bg-base-200 $$rounded-box lg:min-w-max">
  <li>
    <a>Solutions</a>
    <ul>
      <li><a>Design</a></li>
      <li><a>Development</a></li>
      <li><a>Hosting</a></li>
      <li><a>Domain register</a></li>
    </ul>
  </li>
  <li>
    <a>Enterprise</a>
    <ul>
      <li><a>CRM software</a></li>
      <li><a>Marketing management</a></li>
      <li><a>Security</a></li>
      <li><a>Consulting</a></li>
    </ul>
  </li>
  <li>
    <a>Products</a>
    <ul>
      <li><a>UI Kit</a></li>
      <li><a>WordPress themes</a></li>
      <li><a>WordPress plugins</a></li>
      <li>
        <a>Open source</a>
        <ul>
          <li><a>Auth management system</a></li>
          <li><a>VScode theme</a></li>
          <li><a>Color picker app</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <a>Company</a>
    <ul>
      <li><a>About us</a></li>
      <li><a>Contact us</a></li>
      <li><a>Privacy policy</a></li>
      <li><a>Press kit</a></li>
    </ul>
  </li>
</ul>
```
  

##### Collapsible with submenu (responsive)

```html
<ul class="$$menu lg:$$menu-horizontal bg-base-200 $$rounded-box lg:mb-64">
  <li><a>Item 1</a></li>
  <li>
    <details open>
      <summary>Parent item</summary>
      <ul>
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <li><a>item 1</a></li>
              <li><a>item 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li><a>Item 3</a></li>
</ul>
```
  
  

### Browser mockup
Browser mockup Browser mockup shows a box that looks like a browser window.

#### usages

##### browser mockup with border

```html
<div class="$$mockup-browser border-base-300 border w-full">
  <div class="$$mockup-browser-toolbar">
    <div class="$$input">https://daisyui.com</div>
  </div>
  <div class="grid place-content-center border-t border-base-300 h-80">Hello!</div>
</div>
```
  

##### browser mockup with background color

```html
<div class="$$mockup-browser border border-base-300 w-full">
  <div class="$$mockup-browser-toolbar">
    <div class="$$input">https://daisyui.com</div>
  </div>
  <div class="grid place-content-center h-80">Hello!</div>
</div>
```
  
  

### Code mockup
Code mockup Code mockup is used to show a block of code in a box that looks like a code editor.

#### usages

##### mockup code with line prefix

```html
<div class="$$mockup-code w-full">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>
```
  

##### Multi line

```html
<div class="$$mockup-code w-full">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
  <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
  <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
</div>
```
  

##### Highlighted line

```html
<div class="$$mockup-code w-full">
  <pre data-prefix="1"><code>npm i daisyui</code></pre>
  <pre data-prefix="2"><code>installing...</code></pre>
  <pre data-prefix="3" class="bg-warning text-warning-content"><code>Error!</code></pre>
</div>
```
  

##### Long line will scroll

```html
<div class="$$mockup-code w-full">
  <pre
    data-prefix="~"><code>Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione.</code></pre>
</div>
```
  

##### Without prefix

```html
<div class="$$mockup-code w-full">
  <pre><code>without prefix</code></pre>
</div>
```
  

##### With color

```html
<div class="$$mockup-code bg-primary text-primary-content w-full">
  <pre><code>can be any color!</code></pre>
</div>
```
  
  

### Phone mockup
Phone mockup Phone mockup shows a mockup of an iPhone.

#### usages

##### iPhone mockup

```html
<div class="$$mockup-phone">
  <div class="$$mockup-phone-camera"></div>
  <div class="$$mockup-phone-display text-white grid place-content-center">It's Glowtime.</div>
</div>
```
  

##### With color and wallpaper

```html
<div class="$$mockup-phone border-primary">
  <div class="$$mockup-phone-camera"></div>
  <div class="$$mockup-phone-display">
    <img alt="wallpaper" src="https://img.daisyui.com/images/stock/453966.webp"/>
  </div>
</div>
```
  
  

### Window mockup
Window mockup Window mockup shows a box that looks like an operating system window.

#### usages

##### window mockup with border

```html
<div class="$$mockup-window border border-base-300 w-full">
  <div class="grid place-content-center border-t border-base-300 h-80">Hello!</div>
</div>
```
  

##### window mockup with background color

```html
<div class="$$mockup-window bg-base-100 border border-base-300">
  <div class="grid place-content-center h-80">Hello!</div>
</div>
```
  
  

### Modal
Modal Modal is used to show a dialog or a box when you click a button.

#### usages

##### Dialog modal

```html
<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="$$modal">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="$$modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```
  

##### Dialog modal, closes when clicked outside

```html
<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_2.showModal()">open modal</button>
<dialog id="my_modal_2" class="$$modal">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>
```
  

##### Dialog modal with a close button at corner

```html
<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_3.showModal()">open modal</button>
<dialog id="my_modal_3" class="$$modal">
  <div class="$$modal-box">
    <form method="dialog">
      <button class="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
```
  

##### Dialog modal with custom width

```html
<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_4.showModal()">open modal</button>
<dialog id="my_modal_4" class="$$modal">
  <div class="$$modal-box w-11/12 max-w-5xl">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Click the button below to close</p>
    <div class="$$modal-action">
      <form method="dialog">
        <!-- if there is a button, it will close the modal -->
        <button class="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```
  

##### Responsive

```html
<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_5.showModal()">open modal</button>
<dialog id="my_modal_5" class="$$modal $$modal-bottom sm:$$modal-middle">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="$$modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```
  

##### Modal using checkbox

```html
<!-- The button to open modal -->
<label for="my_modal_6" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_6" class="$$modal-toggle" />
<div class="$$modal" role="dialog">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
    <div class="$$modal-action">
      <label for="my_modal_6" class="$$btn">Close!</label>
    </div>
  </div>
</div>
```
  

##### Modal that closes when clicked outside

```html
<!-- The button to open modal -->
<label for="my_modal_7" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_7" class="$$modal-toggle" />
<div class="$$modal" role="dialog">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
  </div>
  <label class="$$modal-backdrop" for="my_modal_7">Close</label>
</div>
```
  

##### Modal using anchor link

```html
<!-- The button to open modal -->
<a href="#my_modal_8" class="$$btn">open modal</a>

<!-- Put this part before </body> tag -->
<div class="$$modal" role="dialog" id="my_modal_8">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with anchor links</p>
    <div class="$$modal-action">
      <a href="#" class="$$btn">Yay!</a>
    </div>
  </div>
</div>
```
  
  

### Navbar
Navbar Navbar is used to show a navigation bar on the top of the page.

#### usages

##### Navbar with title only

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
</div>
```
  

##### Navbar with title and icon

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
    </button>
  </div>
</div>
```
  

##### Navbar with icon at start and end

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="flex-none">
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </button>
  </div>
  <div class="flex-1">
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
    </button>
  </div>
</div>
```
  

##### Navbar with menu and submenu

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <ul class="$$menu $$menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
```
  

##### Navbar with search input and dropdown

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex gap-2">
    <input type="text" placeholder="Search" class="$$input $$input-bordered w-24 md:w-auto" />
    <div class="$$dropdown $$dropdown-end">
      <div tabindex="0" role="button" class="$$btn $$btn-ghost $$btn-circle $$avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabindex="0"
        class="$$menu $$menu-sm $$dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a class="justify-between">
            Profile
            <span class="$$badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
```
  

##### Navbar with icon, indicator and dropdown

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <div class="$$dropdown $$dropdown-end">
      <div tabindex="0" role="button" class="$$btn $$btn-ghost $$btn-circle">
        <div class="$$indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span class="$$badge $$badge-sm $$indicator-item">8</span>
        </div>
      </div>
      <div
        tabindex="0"
        class="$$card $$card-compact $$dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div class="$$card-body">
          <span class="text-lg font-bold">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="$$card-actions">
            <button class="$$btn $$btn-primary $$btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="$$dropdown $$dropdown-end">
      <div tabindex="0" role="button" class="$$btn $$btn-ghost $$btn-circle $$avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabindex="0"
        class="$$menu $$menu-sm $$dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a class="justify-between">
            Profile
            <span class="$$badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
```
  

##### Navbar with dropdown, center logo and icon

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="$$navbar-start">
    <div class="$$dropdown">
      <div tabindex="0" role="button" class="$$btn $$btn-ghost $$btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="$$menu $$menu-sm $$dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div class="$$navbar-center">
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="$$navbar-end">
    <button class="$$btn $$btn-ghost $$btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
    </button>
    <button class="$$btn $$btn-ghost $$btn-circle">
      <div class="$$indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span class="$$badge $$badge-xs $$badge-primary $$indicator-item"></span>
      </div>
    </button>
  </div>
</div>
```
  

##### responsive (dropdown menu on small screen, center menu on large screen)

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="$$navbar-start">
    <div class="$$dropdown">
      <div tabindex="0" role="button" class="$$btn $$btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="$$menu $$menu-sm $$dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="$$navbar-center hidden lg:flex">
    <ul class="$$menu $$menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div class="$$navbar-end">
    <a class="$$btn">Button</a>
  </div>
</div>
```
  

##### Navbar with colors

```html
<div class="$$navbar bg-neutral text-neutral-content">
  <button class="$$btn $$btn-ghost text-xl">daisyUI</button>
</div>

<div class="$$navbar bg-base-300">
  <button class="$$btn $$btn-ghost text-xl">daisyUI</button>
</div>

<div class="$$navbar bg-primary text-primary-content">
  <button class="$$btn $$btn-ghost text-xl">daisyUI</button>
</div>
```
  
  

### Pagination
Pagination Pagination is a group of buttons that allow the user to navigate between a set of related content.

#### usages

##### Pagination with an active button

```html
<div class="$$join">
  <button class="$$join-item $$btn">1</button>
  <button class="$$join-item $$btn $$btn-active">2</button>
  <button class="$$join-item $$btn">3</button>
  <button class="$$join-item $$btn">4</button>
</div>
```
  

##### Sizes

```html
<div class="$$join">
  <button class="$$join-item $$btn $$btn-xs">1</button>
  <button class="$$join-item $$btn $$btn-xs $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-xs">3</button>
  <button class="$$join-item $$btn $$btn-xs">4</button>
</div>
<div class="$$join">
  <button class="$$join-item $$btn $$btn-sm">1</button>
  <button class="$$join-item $$btn $$btn-sm $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-sm">3</button>
  <button class="$$join-item $$btn $$btn-sm">4</button>
</div>
<div class="$$join">
  <button class="$$join-item $$btn $$btn-md">1</button>
  <button class="$$join-item $$btn $$btn-md $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-md">3</button>
  <button class="$$join-item $$btn $$btn-md">4</button>
</div>
<div class="$$join">
  <button class="$$join-item $$btn $$btn-lg">1</button>
  <button class="$$join-item $$btn $$btn-lg $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-lg">3</button>
  <button class="$$join-item $$btn $$btn-lg">4</button>
</div>
<div class="$$join">
  <button class="$$join-item $$btn $$btn-xl">1</button>
  <button class="$$join-item $$btn $$btn-xl $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-xl">3</button>
  <button class="$$join-item $$btn $$btn-xl">4</button>
</div>
```
  

##### With a disabled button

```html
<div class="$$join">
  <button class="$$join-item $$btn">1</button>
  <button class="$$join-item $$btn">2</button>
  <button class="$$join-item $$btn $$btn-disabled">...</button>
  <button class="$$join-item $$btn">99</button>
  <button class="$$join-item $$btn">100</button>
</div>
```
  

##### Extra small buttons

```html
<div class="$$join">
  <button class="$$join-item $$btn">«</button>
  <button class="$$join-item $$btn">Page 22</button>
  <button class="$$join-item $$btn">»</button>
</div>
```
  

##### Nex/Prev outline buttons with equal width

```html
<div class="$$join grid grid-cols-2">
  <button class="$$join-item $$btn $$btn-outline">Previous page</button>
  <button class="$$join-item $$btn $$btn-outline">Next</button>
</div>
```
  

##### Using radio inputs

```html
<div class="$$join">
  <input
    class="$$join-item $$btn $$btn-square"
    type="radio"
    name="options"
    aria-label="1"
    checked="checked" />
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="2" />
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="3" />
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="4" />
</div>
```
  
  

### Progress
Progress Progress bar can be used to show the progress of a task or to show the passing of time.

#### usages

##### Progress

```html
<progress class="$$progress w-56" value="0" max="100"></progress>
<progress class="$$progress w-56" value="10" max="100"></progress>
<progress class="$$progress w-56" value="40" max="100"></progress>
<progress class="$$progress w-56" value="70" max="100"></progress>
<progress class="$$progress w-56" value="100" max="100"></progress>
```
  

##### Primary color

```html
<progress class="$$progress $$progress-primary w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="100" max="100"></progress>
```
  

##### Secondary color

```html
<progress class="$$progress $$progress-secondary w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="100" max="100"></progress>
```
  

##### Accent color

```html
<progress class="$$progress $$progress-accent w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="100" max="100"></progress>
```
  

##### Neutral color

```html
<progress class="$$progress $$progress-neutral w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-neutral w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-neutral w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-neutral w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-neutral w-56" value="100" max="100"></progress>
```
  

##### Info color

```html
<progress class="$$progress $$progress-info w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="100" max="100"></progress>
```
  

##### Success color

```html
<progress class="$$progress $$progress-success w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="100" max="100"></progress>
```
  

##### Warning color

```html
<progress class="$$progress $$progress-warning w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="100" max="100"></progress>
```
  

##### Error color

```html
<progress class="$$progress $$progress-error w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="100" max="100"></progress>
```
  

##### Indeterminate (without value)

```html
<progress class="$$progress w-56"></progress>
```
  
  

### Radial progress
Radial progress Radial progress can be used to show the progress of a task or to show the passing of time.

#### usages

##### Radial progress

```html
<div class="$$radial-progress" style="--$$value:70;" aria-valuenow="70" role="progressbar">70%</div>
```
  

##### Different values

```html
<div class="$$radial-progress" style="--$$value:0;" aria-valuenow="0" role="progressbar">0%</div>
<div class="$$radial-progress" style="--$$value:20;" aria-valuenow="20" role="progressbar">20%</div>
<div class="$$radial-progress" style="--$$value:60;" aria-valuenow="60" role="progressbar">60%</div>
<div class="$$radial-progress" style="--$$value:80;" aria-valuenow="80" role="progressbar">80%</div>
<div class="$$radial-progress" style="--$$value:100;" aria-valuenow="100" role="progressbar">100%</div>
```
  

##### Custom color

```html
<div class="$$radial-progress text-primary" style="--$$value:70;" aria-valuenow="70" role="progressbar">70%</div>
```
  

##### With background color and border

```html
<div
  class="$$radial-progress bg-primary text-primary-content border-primary border-4"
  style="--$$value:70;" aria-valuenow="70" role="progressbar">
  70%
</div>
```
  

##### Custom size and custom thickness

```html
<div class="$$radial-progress" style="--$$value:70; --$$size:12rem; --$$thickness: 2px;" aria-valuenow="70" role="progressbar">70%</div>
<div class="$$radial-progress" style="--$$value:70; --$$size:12rem; --$$thickness: 2rem;" aria-valuenow="70" role="progressbar">70%</div>
```
  
  

### Radio
Radio Radio buttons allow the user to select one option from a set.

#### usages

##### Radio

```html
<input type="radio" name="radio-1" class="$$radio" checked="checked" />
<input type="radio" name="radio-1" class="$$radio" />
```
  

##### Radio sizes

```html
<input type="radio" name="radio-2" class="$$radio $$radio-xs" checked="checked" />
<input type="radio" name="radio-2" class="$$radio $$radio-sm" checked="checked" />
<input type="radio" name="radio-2" class="$$radio $$radio-md" checked="checked" />
<input type="radio" name="radio-2" class="$$radio $$radio-lg" checked="checked" />
<input type="radio" name="radio-2" class="$$radio $$radio-xl" checked="checked" />
```
  

##### Neutral color

```html
<input type="radio" name="radio-3" class="$$radio $$radio-neutral" checked="checked" />
<input type="radio" name="radio-3" class="$$radio $$radio-neutral" />
```
  

##### Primary color

```html
<input type="radio" name="radio-4" class="$$radio $$radio-primary" checked="checked" />
<input type="radio" name="radio-4" class="$$radio $$radio-primary" />
```
  

##### Secondary color

```html
<input type="radio" name="radio-5" class="$$radio $$radio-secondary" checked="checked" />
<input type="radio" name="radio-5" class="$$radio $$radio-secondary" />
```
  

##### Accent color

```html
<input type="radio" name="radio-6" class="$$radio $$radio-accent" checked="checked" />
<input type="radio" name="radio-6" class="$$radio $$radio-accent" />
```
  

##### Success color

```html
<input type="radio" name="radio-7" class="$$radio $$radio-success" checked="checked" />
<input type="radio" name="radio-7" class="$$radio $$radio-success" />
```
  

##### Warning color

```html
<input type="radio" name="radio-8" class="$$radio $$radio-warning" checked="checked" />
<input type="radio" name="radio-8" class="$$radio $$radio-warning" />
```
  

##### Info color

```html
<input type="radio" name="radio-9" class="$$radio $$radio-info" checked="checked" />
<input type="radio" name="radio-9" class="$$radio $$radio-info" />
```
  

##### Error color

```html
<input type="radio" name="radio-10" class="$$radio $$radio-error" checked="checked" />
<input type="radio" name="radio-10" class="$$radio $$radio-error" />
```
  

##### Disabled

```html
<input type="radio" name="radio-11" class="$$radio" disabled checked="checked" />
<input type="radio" name="radio-11" class="$$radio" disabled />
```
  

##### Radio with custom colors

```html
<input
  type="radio" name="radio-12" checked="checked"
  class="$$radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" />
<input
  type="radio" name="radio-12" checked="checked"
  class="$$radio bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600" />
```
  
  

### Range slider
Range slider Range slider is used to select a value by sliding a handle.

#### usages

##### Range

```html
<input type="range" min="0" max="100" value="40" class="$$range" />
```
  

##### With steps and measure

```html
<div class="w-full max-w-xs">
  <input type="range" min="0" max="100" value="25" class="$$range" step="25" />
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
  </div>
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
  </div>
</div>
```
  

##### Neutral color

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-neutral" />
```
  

##### Primary color

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-primary" />
```
  

##### Secondary color

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-secondary" />
```
  

##### Accent color

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-accent" />
```
  

##### Success color

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-success" />
```
  

##### Warning color

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-warning" />
```
  

##### Info color

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-info" />
```
  

##### Error color

```html
<input type="range" min="0" max="100" value="40" class="$$range $$range-error" />
```
  

##### Sizes

```html
<input type="range" min="0" max="100" value="30" class="$$range $$range-xs" />
<input type="range" min="0" max="100" value="40" class="$$range $$range-sm" />
<input type="range" min="0" max="100" value="50" class="$$range $$range-md" />
<input type="range" min="0" max="100" value="60" class="$$range $$range-lg" />
<input type="range" min="0" max="100" value="70" class="$$range $$range-xl" />
```
  

##### Range with custom color and no fill

```html
<input type="range" min="0" max="100" value="40" 
  class="$$range text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]" />
```
  
  

### Rating
Rating Rating is a set of radio buttons that allow the user to rate something.

#### usages

##### Rating

```html
<div class="$$rating">
  <input type="radio" name="rating-1" class="$$mask $$mask-star" aria-label="1 star" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" aria-label="2 star" checked="checked" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" aria-label="3 star" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" aria-label="4 star" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" aria-label="5 star" />
</div>
```
  

##### Read-only Rating

```html
<div class="$$rating">
  <div class="$$mask $$mask-star" aria-label="1 star"></div>
  <div class="$$mask $$mask-star" aria-label="2 star"></div>
  <div class="$$mask $$mask-star" aria-label="3 star" aria-current="true"></div>
  <div class="$$mask $$mask-star" aria-label="4 star"></div>
  <div class="$$mask $$mask-star" aria-label="5 star"></div>
</div>
```
  

##### mask-star-2 with warning color

```html
<div class="$$rating">
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
```
  

##### mask-heart with multiple colors

```html
<div class="$$rating gap-1">
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-red-400" aria-label="1 star" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-orange-400" aria-label="2 star" checked="checked" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-yellow-400" aria-label="3 star" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-lime-400" aria-label="4 star" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-green-400" aria-label="5 star" />
</div>
```
  

##### mask-star-2 with green-500 color

```html
<div class="$$rating">
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" aria-label="1 star" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" aria-label="2 star" checked="checked" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" aria-label="3 star" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" aria-label="4 star" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" aria-label="5 star" />
</div>
```
  

##### Sizes

```html
<!-- xs -->
<div class="$$rating $$rating-xs">
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
<!-- sm -->
<div class="$$rating $$rating-sm">
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
<!-- md -->
<div class="$$rating $$rating-md">
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
<!-- lg -->
<div class="$$rating $$rating-lg">
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
<!-- xl -->
<div class="$$rating $$rating-xl">
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
```
  

##### with 

```html
<div class="$$rating $$rating-lg">
  <input type="radio" name="rating-10" class="$$rating-hidden" aria-label="clear" />
  <input type="radio" name="rating-10" class="$$mask $$mask-star-2" aria-label="1 star" />
  <input type="radio" name="rating-10" class="$$mask $$mask-star-2" aria-label="2 star" checked="checked" />
  <input type="radio" name="rating-10" class="$$mask $$mask-star-2" aria-label="3 star" />
  <input type="radio" name="rating-10" class="$$mask $$mask-star-2" aria-label="4 star" />
  <input type="radio" name="rating-10" class="$$mask $$mask-star-2" aria-label="5 star" />
</div>
```
  

##### half stars

```html
<div class="$$rating $$rating-lg $$rating-half">
  <input type="radio" name="rating-11" class="$$rating-hidden" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-1 bg-green-500" aria-label="0.5 star" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-2 bg-green-500" aria-label="1 star" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-1 bg-green-500" aria-label="1.5 star" checked="checked" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-2 bg-green-500" aria-label="2 star" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-1 bg-green-500" aria-label="2.5 star" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-2 bg-green-500" aria-label="3 star" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-1 bg-green-500" aria-label="3.5 star" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-2 bg-green-500" aria-label="4 star" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-1 bg-green-500" aria-label="4.5 star" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-2 bg-green-500" aria-label="5 star" />
</div>
```
  
  

### Select
Select Select is used to pick a value from a list of options.

#### usages

##### Select

```html
<select class="$$select">
  <option disabled selected>Pick a color</option>
  <option>Crimson</option>
  <option>Amber</option>
  <option>Velvet</option>
</select>
```
  

##### Ghost (no background)

```html
<select class="$$select $$select-ghost">
  <option disabled selected>Pick a font</option>
  <option>Inter</option>
  <option>Poppins</option>
  <option>Raleway</option>
</select>
```
  

##### With fieldset and fieldset-labels

```html
<fieldset class="$$fieldset">
  <legend class="$$fieldset-legend">Browsers</legend>
  <select class="$$select">
    <option disabled selected>Pick a browser</option>
    <option>Chrome</option>
    <option>FireFox</option>
    <option>Safari</option>
  </select>
  <span class="$$fieldset-label">Optional</span>
</fieldset>
```
  

##### Primary color

```html
<select class="$$select $$select-primary">
  <option disabled selected>Pick a text editor</option>
  <option>VScode</option>
  <option>VScode fork</option>
  <option>Another VScode fork</option>
</select>
```
  

##### Secondary color

```html
<select class="$$select $$select-secondary">
  <option disabled selected>Pick a language</option>
  <option>Zig</option>
  <option>Go</option>
  <option>Rust</option>
</select>
```
  

##### Accent color

```html
<select class="$$select $$select-accent">
  <option selected disabled>Color scheme</option>
  <option>Light mode</option>
  <option>Dark mode</option>
  <option>System</option>
</select>
```
  

##### Neutral color

```html
<select class="$$select $$select-neutral">
  <option disabled selected>Server location</option>
  <option>North America</option>
  <option>EU west</option>
  <option>South East Asia</option>
</select>
```
  

##### Info color

```html
<select class="$$select $$select-info">
  <option disabled selected>Pick a Framework</option>
  <option>React</option>
  <option>Vue</option>
  <option>Angular</option>
</select>
```
  

##### Success color

```html
<select class="$$select $$select-success">
  <option disabled selected>Pick a Runtime</option>
  <option>npm</option>
  <option>Bun</option>
  <option>yarn</option>
</select>
```
  

##### Warning color

```html
<select class="$$select $$select-warning">
  <option disabled selected>Pick an OS</option>
  <option>Windows</option>
  <option>MacOS</option>
  <option>Linux</option>
</select>
```
  

##### Error color

```html
<select class="$$select $$select-error">
  <option disabled selected>Pick an AI Model</option>
  <option>GPT-4</option>
  <option>Claude</option>
  <option>Llama</option>
</select>
```
  

##### Sizes

```html
<select class="$$select $$select-xs">
  <option disabled selected>Xsmall</option>
  <option>Xsmall Apple</option>
  <option>Xsmall Orange</option>
  <option>Xsmall Tomato</option>
</select>
<select class="$$select $$select-sm">
  <option disabled selected>Small</option>
  <option>Small Apple</option>
  <option>Small Orange</option>
  <option>Small Tomato</option>
</select>
<select class="$$select $$select-md">
  <option disabled selected>Medium</option>
  <option>Medium Apple</option>
  <option>Medium Orange</option>
  <option>Medium Tomato</option>
</select>
<select class="$$select $$select-lg">
  <option disabled selected>Large</option>
  <option>Large Apple</option>
  <option>Large Orange</option>
  <option>Large Tomato</option>
</select>
<select class="$$select $$select-xl">
  <option disabled selected>Xlarge</option>
  <option>Xlarge Apple</option>
  <option>Xlarge Orange</option>
  <option>Xlarge Tomato</option>
</select>
```
  

##### Disabled

```html
<select class="$$select" disabled>
  <option>You can't touch this</option>
</select>
```
  
  

### Skeleton
Skeleton Skeleton is a component that can be used to show a loading state of a component.

#### usages

##### Skeleton

```html
<div class="$$skeleton h-32 w-32"></div>
```
  

##### Skeleton - circle with content

```html
<div class="flex w-52 flex-col gap-4">
  <div class="flex items-center gap-4">
    <div class="$$skeleton h-16 w-16 shrink-0 rounded-full"></div>
    <div class="flex flex-col gap-4">
      <div class="$$skeleton h-4 w-20"></div>
      <div class="$$skeleton h-4 w-28"></div>
    </div>
  </div>
  <div class="$$skeleton h-32 w-full"></div>
</div>
```
  

##### Skeleton - rectangle with content

```html
<div class="flex w-52 flex-col gap-4">
  <div class="$$skeleton h-32 w-full"></div>
  <div class="$$skeleton h-4 w-28"></div>
  <div class="$$skeleton h-4 w-full"></div>
  <div class="$$skeleton h-4 w-full"></div>
</div>
```
  
  

### Stack
Stack Stack visually puts elements on top of each other.

#### usages

##### 3 divs in a stack

```html
<div class="$$stack h-20 w-32">
  <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
  <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
  <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">
    3
  </div>
</div>
```
  

##### stacked images

```html
<div class="$$stack w-48">
  <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" class="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" class="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" class="rounded-box" />
</div>
```
  

##### stacked cards

```html
<div class="$$stack size-28">
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">A</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">B</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">C</div>
  </div>
</div>
```
  

##### stacked cards (top direction)

```html
<div class="$$stack $$stack-top size-28">
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">A</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">B</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">C</div>
  </div>
</div>
```
  

##### stacked cards (start direction)

```html
<div class="$$stack $$stack-start size-28">
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">A</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">B</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">C</div>
  </div>
</div>
```
  

##### stacked cards (end direction)

```html
<div class="$$stack $$stack-end size-28">
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">A</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">B</div>
  </div>
  <div class="border-base-content $$card bg-base-100 border text-center">
    <div class="$$card-body">C</div>
  </div>
</div>
```
  

##### stacked cards with shadow

```html
<div class="$$stack">
  <div class="$$card bg-base-200 text-center shadow-md">
    <div class="$$card-body">A</div>
  </div>
  <div class="$$card bg-base-200 text-center shadow">
    <div class="$$card-body">B</div>
  </div>
  <div class="$$card bg-base-200 text-center shadow-sm">
    <div class="$$card-body">C</div>
  </div>
</div>
```
  

##### stacked cards

```html
<div class="$$stack">
  <div class="$$card shadow-md bg-base-100">
    <div class="$$card-body">
      <h2 class="$$card-title">Notification 1</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div class="$$card shadow-md bg-base-100">
    <div class="$$card-body">
      <h2 class="$$card-title">Notification 2</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div class="$$card shadow-md bg-base-100">
    <div class="$$card-body">
      <h2 class="$$card-title">Notification 3</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
</div>
```
  
  

### Stat
Stat Stat is used to show numbers and data in a block.

#### usages

##### Stat

```html
<div class="$$stats shadow">
  <div class="$$stat">
    <div class="$$stat-title">Total Page Views</div>
    <div class="$$stat-value">89,400</div>
    <div class="$$stat-desc">21% more than last month</div>
  </div>
</div>
```
  

##### Stat with icons or image

```html
<div class="$$stats shadow">
  <div class="$$stat">
    <div class="$$stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-8 w-8 stroke-current">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </div>
    <div class="$$stat-title">Total Likes</div>
    <div class="$$stat-value text-primary">25.6K</div>
    <div class="$$stat-desc">21% more than last month</div>
  </div>

  <div class="$$stat">
    <div class="$$stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-8 w-8 stroke-current">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    </div>
    <div class="$$stat-title">Page Views</div>
    <div class="$$stat-value text-secondary">2.6M</div>
    <div class="$$stat-desc">21% more than last month</div>
  </div>

  <div class="$$stat">
    <div class="$$stat-figure text-secondary">
      <div class="$$avatar $$online">
        <div class="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
    </div>
    <div class="$$stat-value">86%</div>
    <div class="$$stat-title">Tasks done</div>
    <div class="$$stat-desc text-secondary">31 tasks remaining</div>
  </div>
</div>
```
  

##### Stat

```html
<div class="$$stats shadow">
  <div class="$$stat">
    <div class="$$stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-8 w-8 stroke-current">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <div class="$$stat-title">Downloads</div>
    <div class="$$stat-value">31K</div>
    <div class="$$stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div class="$$stat">
    <div class="$$stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-8 w-8 stroke-current">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
      </svg>
    </div>
    <div class="$$stat-title">New Users</div>
    <div class="$$stat-value">4,200</div>
    <div class="$$stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div class="$$stat">
    <div class="$$stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-8 w-8 stroke-current">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
      </svg>
    </div>
    <div class="$$stat-title">New Registers</div>
    <div class="$$stat-value">1,200</div>
    <div class="$$stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
```
  

##### Centered items

```html
<div class="$$stats shadow">
  <div class="$$stat place-items-center">
    <div class="$$stat-title">Downloads</div>
    <div class="$$stat-value">31K</div>
    <div class="$$stat-desc">From January 1st to February 1st</div>
  </div>

  <div class="$$stat place-items-center">
    <div class="$$stat-title">Users</div>
    <div class="$$stat-value text-secondary">4,200</div>
    <div class="$$stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>

  <div class="$$stat place-items-center">
    <div class="$$stat-title">New Registers</div>
    <div class="$$stat-value">1,200</div>
    <div class="$$stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
```
  

##### Vertical

```html
<div class="$$stats $$stats-vertical shadow">
  <div class="$$stat">
    <div class="$$stat-title">Downloads</div>
    <div class="$$stat-value">31K</div>
    <div class="$$stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div class="$$stat">
    <div class="$$stat-title">New Users</div>
    <div class="$$stat-value">4,200</div>
    <div class="$$stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div class="$$stat">
    <div class="$$stat-title">New Registers</div>
    <div class="$$stat-value">1,200</div>
    <div class="$$stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
```
  

##### Responsive (vertical on small screen, horizontal on large screen)

```html
<div class="$$stats $$stats-vertical lg:$$stats-horizontal shadow">
  <div class="$$stat">
    <div class="$$stat-title">Downloads</div>
    <div class="$$stat-value">31K</div>
    <div class="$$stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div class="$$stat">
    <div class="$$stat-title">New Users</div>
    <div class="$$stat-value">4,200</div>
    <div class="$$stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div class="$$stat">
    <div class="$$stat-title">New Registers</div>
    <div class="$$stat-value">1,200</div>
    <div class="$$stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
```
  

##### With custom colors and button

```html
<div class="$$stats bg-base-100 border border-base-300">
  <div class="$$stat">
    <div class="$$stat-title">Account balance</div>
    <div class="$$stat-value">$89,400</div>
    <div class="$$stat-actions">
      <button class="$$btn $$btn-xs $$btn-success">Add funds</button>
    </div>
  </div>

  <div class="$$stat">
    <div class="$$stat-title">Current balance</div>
    <div class="$$stat-value">$89,400</div>
    <div class="$$stat-actions">
      <button class="$$btn $$btn-xs">Withdrawal</button>
      <button class="$$btn $$btn-xs">Deposit</button>
    </div>
  </div>
</div>
```
  
  

### Status
Status Status is a really small icon to visually show the current status of an element, like online, offline, error, etc.

#### usages

##### Status

```html
<span class="$$status"></span>
```
  

##### Status sizes

```html
<div aria-label="status" class="$$status $$status-xs"></div>
<div aria-label="status" class="$$status $$status-sm"></div>
<div aria-label="status" class="$$status $$status-md"></div>
<div aria-label="status" class="$$status $$status-lg"></div>
<div aria-label="status" class="$$status $$status-xl"></div>
```
  

##### Status with colors

```html
<div aria-label="status" class="$$status $$status-primary"></div>
<div aria-label="status" class="$$status $$status-secondary"></div>
<div aria-label="status" class="$$status $$status-accent"></div>
<div aria-label="status" class="$$status $$status-neutral"></div>

<div aria-label="info" class="$$status $$status-info"></div>
<div aria-label="success" class="$$status $$status-success"></div>
<div aria-label="warning" class="$$status $$status-warning"></div>
<div aria-label="error" class="$$status $$status-error"></div>
```
  

##### Status with ping animation

```html
<div class="inline-grid *:[grid-area:1/1]">
  <div class="$$status $$status-error animate-ping"></div>
  <div class="$$status $$status-error"></div>
</div> Server is down
```
  

##### Status with bounce animation

```html
<div class="$$status $$status-info animate-bounce"></div> Unread messages
```
  
  

### Steps
Steps Steps can be used to show a list of steps in a process.

#### usages

##### Horizontal

```html
<ul class="$$steps">
  <li class="$$step $$step-primary">Register</li>
  <li class="$$step $$step-primary">Choose plan</li>
  <li class="$$step">Purchase</li>
  <li class="$$step">Receive Product</li>
</ul>
```
  

##### Vertical

```html
<ul class="$$steps $$steps-vertical">
  <li class="$$step $$step-primary">Register</li>
  <li class="$$step $$step-primary">Choose plan</li>
  <li class="$$step">Purchase</li>
  <li class="$$step">Receive Product</li>
</ul>
```
  

##### responsive (vertical on small screen, horizontal on large screen)

```html
<ul class="$$steps $$steps-vertical lg:$$steps-horizontal">
  <li class="$$step $$step-primary">Register</li>
  <li class="$$step $$step-primary">Choose plan</li>
  <li class="$$step">Purchase</li>
  <li class="$$step">Receive Product</li>
</ul>
```
  

##### With custom content in step-icon

```html
<ul class="$$steps">
  <li class="$$step $$step-neutral">
    <span class="$$step-icon">😕</span>Step 1
  </li>
  <li class="$$step $$step-neutral">
    <span class="$$step-icon">😃</span>Step 2
  </li>
  <li class="$$step">
    <span class="$$step-icon">😍</span>Step 3
  </li>
</ul>
```
  

##### With data-content

```html
<ul class="$$steps">
  <li data-content="?" class="$$step $$step-neutral">Step 1</li>
  <li data-content="!" class="$$step $$step-neutral">Step 2</li>
  <li data-content="✓" class="$$step $$step-neutral">Step 3</li>
  <li data-content="✕" class="$$step $$step-neutral">Step 4</li>
  <li data-content="★" class="$$step $$step-neutral">Step 5</li>
  <li data-content="" class="$$step $$step-neutral">Step 6</li>
  <li data-content="●" class="$$step $$step-neutral">Step 7</li>
</ul>
```
  

##### Custom colors

```html
<ul class="$$steps">
  <li class="$$step $$step-info">Fly to moon</li>
  <li class="$$step $$step-info">Shrink the moon</li>
  <li class="$$step $$step-info">Grab the moon</li>
  <li class="$$step $$step-error" data-content="?">Sit on toilet</li>
</ul>
```
  

##### With scrollable wrapper

```html
<div class="overflow-x-auto">
  <ul class="$$steps">
    <li class="$$step">start</li>
    <li class="$$step $$step-secondary">2</li>
    <li class="$$step $$step-secondary">3</li>
    <li class="$$step $$step-secondary">4</li>
    <li class="$$step">5</li>
    <li class="$$step $$step-accent">6</li>
    <li class="$$step $$step-accent">7</li>
    <li class="$$step">8</li>
    <li class="$$step $$step-error">9</li>
    <li class="$$step $$step-error">10</li>
    <li class="$$step">11</li>
    <li class="$$step">12</li>
    <li class="$$step $$step-warning">13</li>
    <li class="$$step $$step-warning">14</li>
    <li class="$$step">15</li>
    <li class="$$step $$step-neutral">16</li>
    <li class="$$step $$step-neutral">17</li>
    <li class="$$step $$step-neutral">18</li>
    <li class="$$step $$step-neutral">19</li>
    <li class="$$step $$step-neutral">20</li>
    <li class="$$step $$step-neutral">21</li>
    <li class="$$step $$step-neutral">22</li>
    <li class="$$step $$step-neutral">23</li>
    <li class="$$step $$step-neutral">end</li>
  </ul>
</div>
```
  
  

### Swap
Swap Swap allows you to toggle the visibility of two elements using a checkbox or a class name.

#### usages

##### Swap text

```html
<label class="$$swap">
  <input type="checkbox" />
  <div class="$$swap-on">ON</div>
  <div class="$$swap-off">OFF</div>
</label>
```
  

##### Swap volume icons

```html
<label class="$$swap">
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" />

  <!-- volume on icon -->
  <svg
    class="$$swap-on fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24">
    <path
      d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
  </svg>

  <!-- volume off icon -->
  <svg
    class="$$swap-off fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24">
    <path
      d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
  </svg>
</label>
```
  

##### Swap icons with rotate effect

```html
<label class="$$swap $$swap-rotate">
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" />

  <!-- sun icon -->
  <svg
    class="$$swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  <!-- moon icon -->
  <svg
    class="$$swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
```
  

##### Hamburger button

```html
<label class="$$btn $$btn-circle $$swap $$swap-rotate">
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" />

  <!-- hamburger icon -->
  <svg
    class="$$swap-off fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512">
    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
  </svg>

  <!-- close icon -->
  <svg
    class="$$swap-on fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512">
    <polygon
      points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
  </svg>
</label>
```
  

##### Swap icons with flip effect

```html
<label class="$$swap $$swap-flip text-9xl">
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" />

  <div class="$$swap-on">😈</div>
  <div class="$$swap-off">😇</div>
</label>
```
  

##### Activate using class name instead of checkbox

```html
<label class="$$swap text-6xl">
  <div class="$$swap-on">🥵</div>
  <div class="$$swap-off">🥶</div>
</label>
<label class="$$swap $$swap-active text-6xl">
  <div class="$$swap-on">🥳</div>
  <div class="$$swap-off">😭</div>
</label>
```
  
  

### Tabs
Tabs Tabs can be used to show a list of links in a tabbed format.

#### usages

##### tabs

```html
<div role="tablist" class="$$tabs">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>
```
  

##### tabs-border

```html
<div role="tablist" class="$$tabs $$tabs-border">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>
```
  

##### tabs-lift

```html
<div role="tablist" class="$$tabs $$tabs-lift">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>
```
  

##### Tab box

```html
<div role="tablist" class="$$tabs $$tabs-box">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active">Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>
```
  

##### tabs-box using radio inputs

```html
<!-- name of each tab group should be unique -->
<div class="$$tabs $$tabs-box">
  <input type="radio" name="my_tabs_1" class="$$tab" aria-label="Tab 1" />
  <input type="radio" name="my_tabs_1" class="$$tab" aria-label="Tab 2" checked="checked" />
  <input type="radio" name="my_tabs_1" class="$$tab" aria-label="Tab 3" />
</div>
```
  

##### Sizes

```html

<div role="tablist" class="$$tabs $$tabs-lift $$tabs-xs">
  <a role="tab" class="$$tab">Xsmall</a>
  <a role="tab" class="$$tab $$tab-active">Xsmall</a>
  <a role="tab" class="$$tab">Xsmall</a>
</div>

<div role="tablist" class="$$tabs $$tabs-lift $$tabs-sm">
  <a role="tab" class="$$tab">Small</a>
  <a role="tab" class="$$tab $$tab-active">Small</a>
  <a role="tab" class="$$tab">Small</a>
</div>

<div role="tablist" class="$$tabs $$tabs-lift">
  <a role="tab" class="$$tab">Medium</a>
  <a role="tab" class="$$tab $$tab-active">Medium</a>
  <a role="tab" class="$$tab">Medium</a>
</div>

<div role="tablist" class="$$tabs $$tabs-lift $$tabs-lg">
  <a role="tab" class="$$tab">Large</a>
  <a role="tab" class="$$tab $$tab-active">Large</a>
  <a role="tab" class="$$tab">Large</a>
</div>

<div role="tablist" class="$$tabs $$tabs-lift $$tabs-xl">
  <a role="tab" class="$$tab">Xlarge</a>
  <a role="tab" class="$$tab $$tab-active">Xlarge</a>
  <a role="tab" class="$$tab">Xlarge</a>
</div>
```
  

##### radio tabs-border + tab content

```html
<!-- name of each tab group should be unique -->
<div class="$$tabs $$tabs-border">
  <input type="radio" name="my_tabs_2" class="$$tab" aria-label="Tab 1" />
  <div class="$$tab-content border-base-300 bg-base-100 p-10">Tab content 1</div>

  <input type="radio" name="my_tabs_2" class="$$tab" aria-label="Tab 2" checked="checked" />
  <div class="$$tab-content border-base-300 bg-base-100 p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_2" class="$$tab" aria-label="Tab 3" />
  <div class="$$tab-content border-base-300 bg-base-100 p-10">Tab content 3</div>
</div>
```
  

##### radio tabs-lift + tab content

```html
<!-- name of each tab group should be unique -->
<div class="$$tabs $$tabs-lift">
  <input type="radio" name="my_tabs_3" class="$$tab" aria-label="Tab 1" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_3" class="$$tab" aria-label="Tab 2" checked="checked" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_3" class="$$tab" aria-label="Tab 3" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>
```
  

##### radio tabs-lift with icons + tab content

```html
<!-- name of each tab group should be unique -->
<div class="$$tabs $$tabs-lift">
  <label class="$$tab">
    <input type="radio" name="my_tabs_4" />
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>
    Live
  </label>
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <label class="$$tab">
    <input type="radio" name="my_tabs_4" checked="checked" />
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" /></svg>
    Laugh
  </label>
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  <label class="$$tab">
    <input type="radio" name="my_tabs_4" />
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
    Love
  </label>
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>
```
  

##### radio tabs-lift + tab content on bottom

```html
<!-- name of each tab group should be unique -->
<div class="$$tabs $$tabs-lift $$tabs-bottom">
  <input type="radio" name="my_tabs_5" class="$$tab" aria-label="Tab 1" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_5" class="$$tab" aria-label="Tab 2" checked="checked" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_5" class="$$tab" aria-label="Tab 3" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>
```
  

##### radio tabs-box + tab content

```html
<!-- name of each tab group should be unique -->
<div class="$$tabs $$tabs-box">
  <input type="radio" name="my_tabs_6" class="$$tab" aria-label="Tab 1" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_6" class="$$tab" aria-label="Tab 2" checked="checked" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_6" class="$$tab" aria-label="Tab 3" />
  <div class="$$tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>
```
  

##### Tabs with custom color

```html
<div role="tablist" class="$$tabs $$tabs-lift">
  <a role="tab" class="$$tab">Tab 1</a>
  <a role="tab" class="$$tab $$tab-active text-primary [--tab-bg:orange] [--tab-border-color:red]"> Tab 2</a>
  <a role="tab" class="$$tab">Tab 3</a>
</div>
```
  
  

### Table
Table Table can be used to show a list of data in a table format.

#### usages

##### Table

```html
<div class="overflow-x-auto">
  <table class="$$table">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
```
  

##### Table with border and background

```html
<div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table class="$$table">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
```
  

##### Table with an active row

```html
<div class="overflow-x-auto">
  <table class="$$table">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr class="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
```
  

##### Table with a row that highlights on hover

```html
<div class="overflow-x-auto">
  <table class="$$table">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <!-- row 2 -->
      <tr class="hover:bg-base-300">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
```
  

##### Zebra

```html
<div class="overflow-x-auto">
  <table class="$$table $$table-zebra">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
```
  

##### Table with visual elements

```html
<div class="overflow-x-auto">
  <table class="$$table">
    <!-- head -->
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="$$checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>
          <label>
            <input type="checkbox" class="$$checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center gap-3">
            <div class="$$avatar">
              <div class="$$mask $$mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Hart Hagerty</div>
              <div class="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span class="$$badge $$badge-ghost $$badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button class="$$btn $$btn-ghost $$btn-xs">details</button>
        </th>
      </tr>
      <!-- row 2 -->
      <tr>
        <th>
          <label>
            <input type="checkbox" class="$$checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center gap-3">
            <div class="$$avatar">
              <div class="$$mask $$mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Brice Swyre</div>
              <div class="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br />
          <span class="$$badge $$badge-ghost $$badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button class="$$btn $$btn-ghost $$btn-xs">details</button>
        </th>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>
          <label>
            <input type="checkbox" class="$$checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center gap-3">
            <div class="$$avatar">
              <div class="$$mask $$mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Marjy Ferencz</div>
              <div class="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br />
          <span class="$$badge $$badge-ghost $$badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button class="$$btn $$btn-ghost $$btn-xs">details</button>
        </th>
      </tr>
      <!-- row 4 -->
      <tr>
        <th>
          <label>
            <input type="checkbox" class="$$checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center gap-3">
            <div class="$$avatar">
              <div class="$$mask $$mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Yancy Tear</div>
              <div class="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br />
          <span class="$$badge $$badge-ghost $$badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button class="$$btn $$btn-ghost $$btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    <!-- foot -->
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
```
  

##### Table xs

```html
<div class="overflow-x-auto">
  <table class="$$table $$table-xs">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>company</th>
        <th>location</th>
        <th>Last Login</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Littel, Schaden and Vandervort</td>
        <td>Canada</td>
        <td>12/16/2020</td>
        <td>Blue</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Zemlak, Daniel and Leannon</td>
        <td>United States</td>
        <td>12/5/2020</td>
        <td>Purple</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Carroll Group</td>
        <td>China</td>
        <td>8/15/2020</td>
        <td>Red</td>
      </tr>
      <tr>
        <th>4</th>
        <td>Marjy Ferencz</td>
        <td>Office Assistant I</td>
        <td>Rowe-Schoen</td>
        <td>Russia</td>
        <td>3/25/2021</td>
        <td>Crimson</td>
      </tr>
      <tr>
        <th>5</th>
        <td>Yancy Tear</td>
        <td>Community Outreach Specialist</td>
        <td>Wyman-Ledner</td>
        <td>Brazil</td>
        <td>5/22/2020</td>
        <td>Indigo</td>
      </tr>
      <tr>
        <th>6</th>
        <td>Irma Vasilik</td>
        <td>Editor</td>
        <td>Wiza, Bins and Emard</td>
        <td>Venezuela</td>
        <td>12/8/2020</td>
        <td>Purple</td>
      </tr>
      <tr>
        <th>7</th>
        <td>Meghann Durtnal</td>
        <td>Staff Accountant IV</td>
        <td>Schuster-Schimmel</td>
        <td>Philippines</td>
        <td>2/17/2021</td>
        <td>Yellow</td>
      </tr>
      <tr>
        <th>8</th>
        <td>Sammy Seston</td>
        <td>Accountant I</td>
        <td>O'Hara, Welch and Keebler</td>
        <td>Indonesia</td>
        <td>5/23/2020</td>
        <td>Crimson</td>
      </tr>
      <tr>
        <th>9</th>
        <td>Lesya Tinham</td>
        <td>Safety Technician IV</td>
        <td>Turner-Kuhlman</td>
        <td>Philippines</td>
        <td>2/21/2021</td>
        <td>Maroon</td>
      </tr>
      <tr>
        <th>10</th>
        <td>Zaneta Tewkesbury</td>
        <td>VP Marketing</td>
        <td>Sauer LLC</td>
        <td>Chad</td>
        <td>6/23/2020</td>
        <td>Green</td>
      </tr>
      <tr>
        <th>11</th>
        <td>Andy Tipple</td>
        <td>Librarian</td>
        <td>Hilpert Group</td>
        <td>Poland</td>
        <td>7/9/2020</td>
        <td>Indigo</td>
      </tr>
      <tr>
        <th>12</th>
        <td>Sophi Biles</td>
        <td>Recruiting Manager</td>
        <td>Gutmann Inc</td>
        <td>Indonesia</td>
        <td>2/12/2021</td>
        <td>Maroon</td>
      </tr>
      <tr>
        <th>13</th>
        <td>Florida Garces</td>
        <td>Web Developer IV</td>
        <td>Gaylord, Pacocha and Baumbach</td>
        <td>Poland</td>
        <td>5/31/2020</td>
        <td>Purple</td>
      </tr>
      <tr>
        <th>14</th>
        <td>Maribeth Popping</td>
        <td>Analyst Programmer</td>
        <td>Deckow-Pouros</td>
        <td>Portugal</td>
        <td>4/27/2021</td>
        <td>Aquamarine</td>
      </tr>
      <tr>
        <th>15</th>
        <td>Moritz Dryburgh</td>
        <td>Dental Hygienist</td>
        <td>Schiller, Cole and Hackett</td>
        <td>Sri Lanka</td>
        <td>8/8/2020</td>
        <td>Crimson</td>
      </tr>
      <tr>
        <th>16</th>
        <td>Reid Semiras</td>
        <td>Teacher</td>
        <td>Sporer, Sipes and Rogahn</td>
        <td>Poland</td>
        <td>7/30/2020</td>
        <td>Green</td>
      </tr>
      <tr>
        <th>17</th>
        <td>Alec Lethby</td>
        <td>Teacher</td>
        <td>Reichel, Glover and Hamill</td>
        <td>China</td>
        <td>2/28/2021</td>
        <td>Khaki</td>
      </tr>
      <tr>
        <th>18</th>
        <td>Aland Wilber</td>
        <td>Quality Control Specialist</td>
        <td>Kshlerin, Rogahn and Swaniawski</td>
        <td>Czech Republic</td>
        <td>9/29/2020</td>
        <td>Purple</td>
      </tr>
      <tr>
        <th>19</th>
        <td>Teddie Duerden</td>
        <td>Staff Accountant III</td>
        <td>Pouros, Ullrich and Windler</td>
        <td>France</td>
        <td>10/27/2020</td>
        <td>Aquamarine</td>
      </tr>
      <tr>
        <th>20</th>
        <td>Lorelei Blackstone</td>
        <td>Data Coordiator</td>
        <td>Witting, Kutch and Greenfelder</td>
        <td>Kazakhstan</td>
        <td>6/3/2020</td>
        <td>Red</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>company</th>
        <th>location</th>
        <th>Last Login</th>
        <th>Favorite Color</th>
      </tr>
    </tfoot>
  </table>
</div>
```
  

##### Table with pinned-rows

```html
<div class="h-96 overflow-x-auto">
  <table class="$$table $$table-pin-rows bg-base-200">
    <thead>
      <tr>
        <th>A</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Ant-Man</td></tr>
      <tr><td>Aquaman</td></tr>
      <tr><td>Asterix</td></tr>
      <tr><td>The Atom</td></tr>
      <tr><td>The Avengers</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>B</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Batgirl</td></tr>
      <tr><td>Batman</td></tr>
      <tr><td>Batwoman</td></tr>
      <tr><td>Black Canary</td></tr>
      <tr><td>Black Panther</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>C</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Captain America</td></tr>
      <tr><td>Captain Marvel</td></tr>
      <tr><td>Catwoman</td></tr>
      <tr><td>Conan the Barbarian</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>D</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Daredevil</td></tr>
      <tr><td>The Defenders</td></tr>
      <tr><td>Doc Savage</td></tr>
      <tr><td>Doctor Strange</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>E</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Elektra</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>F</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Fantastic Four</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>G</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Ghost Rider</td></tr>
      <tr><td>Green Arrow</td></tr>
      <tr><td>Green Lantern</td></tr>
      <tr><td>Guardians of the Galaxy</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>H</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Hawkeye</td></tr>
      <tr><td>Hellboy</td></tr>
      <tr><td>Incredible Hulk</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>I</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Iron Fist</td></tr>
      <tr><td>Iron Man</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>M</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Marvelman</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>R</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Robin</td></tr>
      <tr><td>The Rocketeer</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>S</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>The Shadow</td></tr>
      <tr><td>Spider-Man</td></tr>
      <tr><td>Sub-Mariner</td></tr>
      <tr><td>Supergirl</td></tr>
      <tr><td>Superman</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>T</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Teenage Mutant Ninja Turtles</td></tr>
      <tr><td>Thor</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>W</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>The Wasp</td></tr>
      <tr><td>Watchmen</td></tr>
      <tr><td>Wolverine</td></tr>
      <tr><td>Wonder Woman</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>X</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>X-Men</td></tr>
    </tbody>
    <thead>
      <tr>
        <th>Z</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Zatanna</td></tr>
      <tr><td>Zatara</td></tr>
    </tbody>
  </table>
</div>
```
  

##### Table with pinned-rows and pinned-cols

```html
<div class="overflow-x-auto">
  <table class="$$table $$table-xs $$table-pin-rows $$table-pin-cols">
    <thead>
      <tr>
        <th></th>
        <td>Name</td>
        <td>Job</td>
        <td>company</td>
        <td>location</td>
        <td>Last Login</td>
        <td>Favorite Color</td>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Littel, Schaden and Vandervort</td>
        <td>Canada</td>
        <td>12/16/2020</td>
        <td>Blue</td>
        <th>1</th>
      </tr>
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Zemlak, Daniel and Leannon</td>
        <td>United States</td>
        <td>12/5/2020</td>
        <td>Purple</td>
        <th>2</th>
      </tr>
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Carroll Group</td>
        <td>China</td>
        <td>8/15/2020</td>
        <td>Red</td>
        <th>3</th>
      </tr>
      <tr>
        <th>4</th>
        <td>Marjy Ferencz</td>
        <td>Office Assistant I</td>
        <td>Rowe-Schoen</td>
        <td>Russia</td>
        <td>3/25/2021</td>
        <td>Crimson</td>
        <th>4</th>
      </tr>
      <tr>
        <th>5</th>
        <td>Yancy Tear</td>
        <td>Community Outreach Specialist</td>
        <td>Wyman-Ledner</td>
        <td>Brazil</td>
        <td>5/22/2020</td>
        <td>Indigo</td>
        <th>5</th>
      </tr>
      <tr>
        <th>6</th>
        <td>Irma Vasilik</td>
        <td>Editor</td>
        <td>Wiza, Bins and Emard</td>
        <td>Venezuela</td>
        <td>12/8/2020</td>
        <td>Purple</td>
        <th>6</th>
      </tr>
      <tr>
        <th>7</th>
        <td>Meghann Durtnal</td>
        <td>Staff Accountant IV</td>
        <td>Schuster-Schimmel</td>
        <td>Philippines</td>
        <td>2/17/2021</td>
        <td>Yellow</td>
        <th>7</th>
      </tr>
      <tr>
        <th>8</th>
        <td>Sammy Seston</td>
        <td>Accountant I</td>
        <td>O'Hara, Welch and Keebler</td>
        <td>Indonesia</td>
        <td>5/23/2020</td>
        <td>Crimson</td>
        <th>8</th>
      </tr>
      <tr>
        <th>9</th>
        <td>Lesya Tinham</td>
        <td>Safety Technician IV</td>
        <td>Turner-Kuhlman</td>
        <td>Philippines</td>
        <td>2/21/2021</td>
        <td>Maroon</td>
        <th>9</th>
      </tr>
      <tr>
        <th>10</th>
        <td>Zaneta Tewkesbury</td>
        <td>VP Marketing</td>
        <td>Sauer LLC</td>
        <td>Chad</td>
        <td>6/23/2020</td>
        <td>Green</td>
        <th>10</th>
      </tr>
      <tr>
        <th>11</th>
        <td>Andy Tipple</td>
        <td>Librarian</td>
        <td>Hilpert Group</td>
        <td>Poland</td>
        <td>7/9/2020</td>
        <td>Indigo</td>
        <th>11</th>
      </tr>
      <tr>
        <th>12</th>
        <td>Sophi Biles</td>
        <td>Recruiting Manager</td>
        <td>Gutmann Inc</td>
        <td>Indonesia</td>
        <td>2/12/2021</td>
        <td>Maroon</td>
        <th>12</th>
      </tr>
      <tr>
        <th>13</th>
        <td>Florida Garces</td>
        <td>Web Developer IV</td>
        <td>Gaylord, Pacocha and Baumbach</td>
        <td>Poland</td>
        <td>5/31/2020</td>
        <td>Purple</td>
        <th>13</th>
      </tr>
      <tr>
        <th>14</th>
        <td>Maribeth Popping</td>
        <td>Analyst Programmer</td>
        <td>Deckow-Pouros</td>
        <td>Portugal</td>
        <td>4/27/2021</td>
        <td>Aquamarine</td>
        <th>14</th>
      </tr>
      <tr>
        <th>15</th>
        <td>Moritz Dryburgh</td>
        <td>Dental Hygienist</td>
        <td>Schiller, Cole and Hackett</td>
        <td>Sri Lanka</td>
        <td>8/8/2020</td>
        <td>Crimson</td>
        <th>15</th>
      </tr>
      <tr>
        <th>16</th>
        <td>Reid Semiras</td>
        <td>Teacher</td>
        <td>Sporer, Sipes and Rogahn</td>
        <td>Poland</td>
        <td>7/30/2020</td>
        <td>Green</td>
        <th>16</th>
      </tr>
      <tr>
        <th>17</th>
        <td>Alec Lethby</td>
        <td>Teacher</td>
        <td>Reichel, Glover and Hamill</td>
        <td>China</td>
        <td>2/28/2021</td>
        <td>Khaki</td>
        <th>17</th>
      </tr>
      <tr>
        <th>18</th>
        <td>Aland Wilber</td>
        <td>Quality Control Specialist</td>
        <td>Kshlerin, Rogahn and Swaniawski</td>
        <td>Czech Republic</td>
        <td>9/29/2020</td>
        <td>Purple</td>
        <th>18</th>
      </tr>
      <tr>
        <th>19</th>
        <td>Teddie Duerden</td>
        <td>Staff Accountant III</td>
        <td>Pouros, Ullrich and Windler</td>
        <td>France</td>
        <td>10/27/2020</td>
        <td>Aquamarine</td>
        <th>19</th>
      </tr>
      <tr>
        <th>20</th>
        <td>Lorelei Blackstone</td>
        <td>Data Coordinator</td>
        <td>Witting, Kutch and Greenfelder</td>
        <td>Kazakhstan</td>
        <td>6/3/2020</td>
        <td>Red</td>
        <th>20</th>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <td>Name</td>
        <td>Job</td>
        <td>company</td>
        <td>location</td>
        <td>Last Login</td>
        <td>Favorite Color</td>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
```
  
  

### Textarea
Textarea Textarea allows users to enter text in multiple lines.

#### usages

##### Textarea

```html
<textarea class="$$textarea" placeholder="Bio"></textarea>
```
  

##### Ghost (no background)

```html
<textarea class="$$textarea $$textarea-ghost" placeholder="Bio"></textarea>
```
  

##### With form control and labels

```html
<fieldset class="$$fieldset">
  <legend class="$$fieldset-legend">Your bio</legend>
  <textarea class="$$textarea h-24" placeholder="Bio"></textarea>
  <div class="$$fieldset-label">Optional</div>
</fieldset>
```
  

##### Textarea colors

```html
<textarea type="text" placeholder="Primary" class="$$textarea $$textarea-primary"></textarea>
<textarea type="text" placeholder="Secondary" class="$$textarea $$textarea-secondary"></textarea>
<textarea type="text" placeholder="Accent" class="$$textarea $$textarea-accent"></textarea>
<textarea type="text" placeholder="Neutral" class="$$textarea $$textarea-neutral"></textarea>
<textarea type="text" placeholder="Info" class="$$textarea $$textarea-info"></textarea>
<textarea type="text" placeholder="Success" class="$$textarea $$textarea-success"></textarea>
<textarea type="text" placeholder="Warning" class="$$textarea $$textarea-warning"></textarea>
<textarea type="text" placeholder="Error" class="$$textarea $$textarea-error"></textarea>
```
  

##### Sizes

```html
<textarea placeholder="Bio" class="$$textarea $$textarea-xs"></textarea>

<textarea placeholder="Bio" class="$$textarea $$textarea-sm"></textarea>

<textarea placeholder="Bio" class="$$textarea $$textarea-md"></textarea>

<textarea placeholder="Bio" class="$$textarea $$textarea-lg"></textarea>

<textarea placeholder="Bio" class="$$textarea $$textarea-xl"></textarea>
```
  

##### Disabled

```html
<textarea class="$$textarea" placeholder="Bio" disabled></textarea>
```
  
  

### Theme Controller
Theme Controller If a checked checkbox input or a checked radio input with theme-controller class exists in the page, The page will have the same theme as that input's value.

#### usages

##### Theme Controller using a toggle

```html
<input type="checkbox" value="synthwave" class="$$toggle $$theme-controller" />
```
  

##### Theme Controller using a checkbox

```html
<input type="checkbox" value="synthwave" class="$$checkbox $$theme-controller" />
```
  

##### Theme Controller using a swap

```html
<label class="$$swap $$swap-rotate">
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" class="$$theme-controller" value="synthwave" />

  <!-- sun icon -->
  <svg
    class="$$swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  <!-- moon icon -->
  <svg
    class="$$swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
```
  

##### Theme Controller using a toggle with text

```html
<label class="flex cursor-pointer gap-2">
  <span class="$$label-text">Current</span>
  <input type="checkbox" value="synthwave" class="$$toggle $$theme-controller" />
  <span class="$$label-text">Synthwave</span>
</label>
```
  

##### Theme Controller using a toggle with icons

```html
<label class="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="synthwave" class="$$toggle $$theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
```
  

##### Theme Controller using a toggle with icons inside

```html
<label class="$$toggle text-base-content">
  <input type="checkbox" value="synthwave" class="theme-controller" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>
```
  

##### Theme Controller using a toggle with custom colors

```html
<input
  type="checkbox"
  value="synthwave"
  class="$$toggle $$theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]" />
```
  

##### Theme Controller using a radio input

```html
<fieldset class="$$fieldset">
  <label class="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" class="$$radio $$radio-sm $$theme-controller" value="default"/>
    Default
  </label>
  <label class="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" class="$$radio $$radio-sm $$theme-controller" value="retro"/>
    Retro
  </label>
  <label class="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" class="$$radio $$radio-sm $$theme-controller" value="cyberpunk"/>
    Cyberpunk
  </label>
  <label class="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" class="$$radio $$radio-sm $$theme-controller" value="valentine"/>
    Valentine
  </label>
  <label class="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" class="$$radio $$radio-sm $$theme-controller" value="aqua"/>
    Aqua
  </label>
</fieldset>
```
  

##### Theme Controller using a radio button

```html
<div class="$$join $$join-vertical">
  <input
    type="radio"
    name="theme-buttons"
    class="$$btn $$theme-controller $$join-item"
    aria-label="Default"
    value="default" />
  <input
    type="radio"
    name="theme-buttons"
    class="$$btn $$theme-controller $$join-item"
    aria-label="Retro"
    value="retro" />
  <input
    type="radio"
    name="theme-buttons"
    class="$$btn $$theme-controller $$join-item"
    aria-label="Cyberpunk"
    value="cyberpunk" />
  <input
    type="radio"
    name="theme-buttons"
    class="$$btn $$theme-controller $$join-item"
    aria-label="Valentine"
    value="valentine" />
  <input
    type="radio"
    name="theme-buttons"
    class="$$btn $$theme-controller $$join-item"
    aria-label="Aqua"
    value="aqua" />
</div>
```
  

##### Theme Controller using a dropdown

```html
<div class="$$dropdown mb-72">
  <div tabindex="0" role="button" class="$$btn m-1">
    Theme
    <svg
      width="12px"
      height="12px"
      class="inline-block h-2 w-2 fill-current opacity-60"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048">
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
  <ul tabindex="0" class="$$dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl">
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="$$theme-controller w-full $$btn $$btn-sm $$btn-block $$btn-ghost justify-start"
        aria-label="Default"
        value="default" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="$$theme-controller w-full $$btn $$btn-sm $$btn-block $$btn-ghost justify-start"
        aria-label="Retro"
        value="retro" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="$$theme-controller w-full $$btn $$btn-sm $$btn-block $$btn-ghost justify-start"
        aria-label="Cyberpunk"
        value="cyberpunk" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="$$theme-controller w-full $$btn $$btn-sm $$btn-block $$btn-ghost justify-start"
        aria-label="Valentine"
        value="valentine" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="$$theme-controller w-full $$btn $$btn-sm $$btn-block $$btn-ghost justify-start"
        aria-label="Aqua"
        value="aqua" />
    </li>
  </ul>
</div>
```
  
  

### Timeline
Timeline Timeline component shows a list of events in chronological order.

#### usages

##### Timeline with text on both sides and icon

```html
<ul class="$$timeline">
  <li>
    <div class="$$timeline-start">1984</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">First Macintosh computer</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start">1998</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iMac</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start">2001</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPod</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start">2007</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start">2015</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">Apple Watch</div>
  </li>
</ul>
```
  

##### Timeline with bottom side only

```html
<ul class="$$timeline">
  <li>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">First Macintosh computer</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iMac</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPod</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">Apple Watch</div>
  </li>
</ul>
```
  

##### Timeline with top side only

```html
<ul class="$$timeline">
  <li>
    <div class="$$timeline-start $$timeline-box">First Macintosh computer</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">iMac</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">iPod</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">iPhone</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">Apple Watch</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
  </li>
</ul>
```
  

##### Timeline with different sides

```html
<ul class="$$timeline">
  <li>
    <div class="$$timeline-start $$timeline-box">First Macintosh computer</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iMac</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">iPod</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">Apple Watch</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
  </li>
</ul>
```
  

##### Timeline with colorful lines

```html
<ul class="$$timeline">
  <li>
    <div class="$$timeline-start $$timeline-box">First Macintosh computer</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-primary h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr class="bg-primary" />
  </li>
  <li>
    <hr class="bg-primary" />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-primary h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iMac</div>
    <hr class="bg-primary" />
  </li>
  <li>
    <hr class="bg-primary" />
    <div class="$$timeline-start $$timeline-box">iPod</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-primary h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">Apple Watch</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
  </li>
</ul>
```
  

##### Timeline without icons

```html
<ul class="$$timeline">
  <li>
    <div class="$$timeline-start $$timeline-box">First Macintosh computer</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-end $$timeline-box">iMac</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">iPod</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-end $$timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">Apple Watch</div>
  </li>
</ul>
```
  

##### Vertical timeline with text on both sides and icon

```html
<ul class="$$timeline $$timeline-vertical">
  <li>
    <div class="$$timeline-start">1984</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">First Macintosh computer</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start">1998</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iMac</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start">2001</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPod</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start">2007</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start">2015</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">Apple Watch</div>
  </li>
</ul>
```
  

##### Vertical timeline with bottom side only

```html
<ul class="$$timeline $$timeline-vertical">
  <li>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">First Macintosh computer</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iMac</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPod</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">Apple Watch</div>
  </li>
</ul>
```
  

##### Vertical timeline with top side only

```html
<ul class="$$timeline $$timeline-vertical">
  <li>
    <div class="$$timeline-start $$timeline-box">First Macintosh computer</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">iMac</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">iPod</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">iPhone</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">Apple Watch</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
  </li>
</ul>
```
  

##### Vertical timeline with different sides

```html
<ul class="$$timeline $$timeline-vertical">
  <li>
    <div class="$$timeline-start $$timeline-box">First Macintosh computer</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iMac</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">iPod</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">Apple Watch</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
  </li>
</ul>
```
  

##### Vertical timeline with colorful lines

```html
<ul class="$$timeline $$timeline-vertical">
  <li>
    <div class="$$timeline-start $$timeline-box">First Macintosh computer</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-primary h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr class="bg-primary" />
  </li>
  <li>
    <hr class="bg-primary" />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-primary h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iMac</div>
    <hr class="bg-primary" />
  </li>
  <li>
    <hr class="bg-primary" />
    <div class="$$timeline-start $$timeline-box">iPod</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-primary h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">Apple Watch</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
  </li>
</ul>
```
  

##### Vertical timeline without icons

```html
<ul class="$$timeline $$timeline-vertical">
  <li>
    <div class="$$timeline-start $$timeline-box">First Macintosh computer</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-end $$timeline-box">iMac</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">iPod</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-end $$timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start $$timeline-box">Apple Watch</div>
  </li>
</ul>
```
  

##### Responsive: vertical by default, horizontal on large screen

```html
<ul class="$$timeline $$timeline-vertical lg:$$timeline-horizontal">
  <li>
    <div class="$$timeline-start">1984</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">First Macintosh computer</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start">1998</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iMac</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start">2001</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPod</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start">2007</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-start">2015</div>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end $$timeline-box">Apple Watch</div>
  </li>
</ul>
```
  

##### Timeline with icon snapped to the start

```html
<ul class="$$timeline $$timeline-snap-icon max-md:$$timeline-compact $$timeline-vertical">
  <li>
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-start mb-10 md:text-end">
      <time class="font-mono italic">1984</time>
      <div class="text-lg font-black">First Macintosh computer</div>
      The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
      personal computer. It played a pivotal role in establishing desktop publishing as a general
      office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
      in a beige case with integrated carrying handle; it came with a keyboard and single-button
      mouse.
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end md:mb-10">
      <time class="font-mono italic">1998</time>
      <div class="text-lg font-black">iMac</div>
      iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
      been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
      and has evolved through seven distinct forms
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-start mb-10 md:text-end">
      <time class="font-mono italic">2001</time>
      <div class="text-lg font-black">iPod</div>
      The iPod is a discontinued series of portable media players and multi-purpose mobile devices
      designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
      8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
      million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
      over 20 years, the iPod brand is the oldest to be discontinued by Apple
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-end md:mb-10">
      <time class="font-mono italic">2007</time>
      <div class="text-lg font-black">iPhone</div>
      iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
      operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
      January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
      of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
      accounts for 15.6% of global smartphone market share
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="$$timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="$$timeline-start mb-10 md:text-end">
      <time class="font-mono italic">2015</time>
      <div class="text-lg font-black">Apple Watch</div>
      The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
      tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
      iOS and other Apple products and services
    </div>
  </li>
</ul>
```
  
  

### Toast
Toast Toast is a wrapper to stack elements, positioned on the corner of page.

#### usages

##### toast with alert inside

```html
<div class="$$toast">
  <div class="$$alert $$alert-info">
    <span>New message arrived.</span>
  </div>
</div>
```
  

##### toast-top toast-start

```html
<div class="$$toast $$toast-top $$toast-start">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```
  

##### toast-top toast-center

```html
<div class="$$toast $$toast-top $$toast-center">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```
  

##### toast-top toast-end

```html
<div class="$$toast $$toast-top $$toast-end">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```
  

##### toast-start toast-middle

```html
<div class="$$toast $$toast-start $$toast-middle">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```
  

##### toast-center toast-middle

```html
<div class="$$toast $$toast-center $$toast-middle">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```
  

##### toast-end toast-middle

```html
<div class="$$toast $$toast-end $$toast-middle">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```
  

##### toast-start toast-bottom (default)

```html
<div class="$$toast $$toast-start">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```
  

##### toast-center toast-bottom (default)

```html
<div class="$$toast $$toast-center">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```
  

##### toast-end (default) toast-bottom (default)

```html
<div class="$$toast $$toast-end">
  <div class="$$alert $$alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="$$alert $$alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```
  
  

### Toggle
Toggle Toggle is a checkbox that is styled to look like a switch button.

#### usages

##### Toggle

```html
<input type="checkbox" checked="checked" class="$$toggle" />
```
  

##### With fieldset and fieldset-label

```html
<fieldset class="$$fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
  <legend class="$$fieldset-legend">Login options</legend>
  <label class="$$fieldset-label">
    <input type="checkbox" checked="checked" class="$$toggle" />
    Remember me
  </label>
</fieldset>
```
  

##### Sizes

```html
<input type="checkbox" checked="checked" class="$$toggle $$toggle-xs" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-sm" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-md" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-lg" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-xl" />
```
  

##### Colors

```html
<input type="checkbox" checked="checked" class="$$toggle $$toggle-primary" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-secondary" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-accent" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-neutral" />

<input type="checkbox" checked="checked" class="$$toggle $$toggle-info" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-success" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-warning" />
<input type="checkbox" checked="checked" class="$$toggle $$toggle-error" />
```
  

##### Disabled

```html
<input type="checkbox" class="$$toggle" disabled />
<input type="checkbox" class="$$toggle" disabled checked="checked" />
```
  

##### Indeterminate

```html
<!-- You can make a checkbox indeterminate using JS -->
<script>
  document.getElementById("my-toggle").indeterminate = true
</script>
<input type="checkbox" class="$$toggle" id="my-toggle" />
```
  

##### Toggle with icons inside

```html
<label class="$$toggle text-base-content">
  <input type="checkbox">
  <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"></path></g></svg>
  <svg aria-label="disabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
</label>
```
  

##### Toggle with custom colors

```html
<input type="checkbox" checked="checked" class="$$toggle border-indigo-600 bg-indigo-500 checked:bg-orange-400 checked:text-orange-800 checked:border-orange-500 " />
```
  
  

### Tooltip
Tooltip Tooltip can be used to show a message when hovering over an element.

#### usages

##### Tooltip

```html
<div class="$$tooltip" data-tip="hello">
  <button class="$$btn">Hover me</button>
</div>
```
  

##### Tooltip with tooltip-content

```html
<div class="$$tooltip">
  <div class="$$tooltip-content">
    <div class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Wow!</div>
  </div>
  <button class="$$btn">Hover me</button>
</div>
```
  

##### Force open

```html
<div class="$$tooltip $$tooltip-open" data-tip="hello">
  <button class="$$btn">Force open</button>
</div>
```
  

##### Top

```html
<div class="$$tooltip $$tooltip-open $$tooltip-top" data-tip="hello">
  <button class="$$btn">Top</button>
</div>
```
  

##### Bottom

```html
<div class="$$tooltip $$tooltip-open $$tooltip-bottom" data-tip="hello">
  <button class="$$btn">Bottom</button>
</div>
```
  

##### Left

```html
<div class="$$tooltip $$tooltip-open $$tooltip-left" data-tip="hello">
  <button class="$$btn">Left</button>
</div>
```
  

##### Right

```html
<div class="$$tooltip $$tooltip-open $$tooltip-right" data-tip="hello">
  <button class="$$btn">Right</button>
</div>
```
  

##### Neutral color

```html
<div class="$$tooltip $$tooltip-open $$tooltip-neutral" data-tip="neutral">
  <button class="$$btn $$btn-neutral">neutral</button>
</div>
```
  

##### Primary color

```html
<div class="$$tooltip $$tooltip-open $$tooltip-primary" data-tip="primary">
  <button class="$$btn $$btn-primary">primary</button>
</div>
```
  

##### Secondary color

```html
<div class="$$tooltip $$tooltip-open $$tooltip-secondary" data-tip="secondary">
  <button class="$$btn $$btn-secondary">secondary</button>
</div>
```
  

##### Accent color

```html
<div class="$$tooltip $$tooltip-open $$tooltip-accent" data-tip="accent">
  <button class="$$btn $$btn-accent">accent</button>
</div>
```
  

##### Info color

```html
<div class="$$tooltip $$tooltip-open $$tooltip-info" data-tip="info">
  <button class="$$btn $$btn-info">info</button>
</div>
```
  

##### Success color

```html
<div class="$$tooltip $$tooltip-open $$tooltip-success" data-tip="success">
  <button class="$$btn $$btn-success">success</button>
</div>
```
  

##### Warning color

```html
<div class="$$tooltip $$tooltip-open $$tooltip-warning" data-tip="warning">
  <button class="$$btn $$btn-warning">warning</button>
</div>
```
  

##### Error color

```html
<div class="$$tooltip $$tooltip-open $$tooltip-error" data-tip="error">
  <button class="$$btn $$btn-error">error</button>
</div>
```
  

##### Responsive tooltip. only show for large screen

```html
<div class="$$lg:tooltip" data-tip="hello">
  <button class="$$btn">Hover me</button>
</div>
```
  
  

### Validator
Validator Validator class changes the color of form elements to error or success based on input's validation rules.

#### usages

##### Validator

```html
<input class="$$input $$validator" type="email" required placeholder="mail@site.com" />
```
  

##### Validator and validator-hint

```html
<input class="$$input $$validator" type="email" required placeholder="mail@site.com" />
<div class="$$validator-hint">Enter valid email address</div>
```
  

##### Password requirement validator

```html
<input type="password" class="$$input $$validator" required placeholder="Password" minlength="8" 
  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
<p class="$$validator-hint">
  Must be more than 8 characters, including
  <br/>At least one number
  <br/>At least one lowercase letter
  <br/>At least one uppercase letter
</p>
```
  

##### Username requirement validator

```html
<input type="input" class="$$input $$validator" required placeholder="Username" 
  pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
<p class="$$validator-hint">
  Must be 3 to 30 characters
  <br/>containing only letters, numbers or dash
</p>
```
  

##### Phone Number requirement validator

```html
<input type="tel" class="$$input $$validator tabular-nums" required placeholder="Phone" 
  pattern="[0-9]*" minlength="10" maxlength="10" title="Must be 10 digits" />
<p class="$$validator-hint">Must be 10 digits</p>
```
  

##### URL input requirement validator

```html
<input type="url" class="$$input $$validator" required placeholder="https://" value="https://"
  pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$" 
  title="Must be valid URL" />
<p class="$$validator-hint">Must be valid URL</p>
```
  

##### Date input requirement validator

```html
<input type="date" class="$$input $$validator" required placeholder="Pick a date in 2025" 
min="2025-01-01" max="2025-12-31"
  title="Must be valid URL" />
<p class="$$validator-hint">Must be 2025</p>
```
  

##### Number input requirement validator

```html
<input type="number" class="$$input $$validator" required placeholder="Type a number between 1 to 10" 
min="1" max="10"
  title="Must be between be 1 to 10" />
<p class="$$validator-hint">Must be between be 1 to 10</p>
```
  

##### Checkbox requirement validator

```html
<input type="checkbox" class="$$checkbox $$validator" required title="Required" />
<p class="$$validator-hint">Required</p>
```
  

##### Toggle requirement validator

```html
<input type="checkbox" class="$$toggle $$validator" required title="Required" />
<p class="$$validator-hint">Required</p>
```
  

##### Select requirement validator

```html
<form>
  <select class="$$select $$validator" required>
    <option disabled selected value="">Choose:</option>
    <option>Tabs</option>
    <option>Spaces</option>
  </select>
  <p class="$$validator-hint">Required</p>
  <button class="$$btn" type="submit">Submit form</button>
</form>
```
  
  


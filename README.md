vue-yaml-website-creator
========================

Create a simple static website using yaml, vue and bootstrap will take care of the rest.

YAML is a data serialization language that is simple to learn and use. You can learn more about it [clicking here](http://yaml.org/).

## Live Example

You can check a little live example soon...

## YAML Example

To create a page you must use the YAML syntax, you can follow this example to create your first page.

```YAML
    ---
    homepage:
    
      route:
        path: /
        name: Homepage
    
      template:
    
          - type: highlight
            weight: 1
            id: highlight
            content: Welcome to VYWC testing homepage. Crafted with YAML!
            align: center
    
          - type: text
            id: box
            content: > 
              On this block you can write whatever you want!
            align: right
    
          - type: image
            title: This is a image
            align: center
            src: logo.png
    
    ...

```

## Routing

In order to route your page you must declare the follow params on the yaml file:

```YAML
  route:
    path: /
    name: Homepage
```

Options:

|Attribute|Default|Description
|---|---|---
|path|N/D|The desired path for your page
|name|N/D|This will identify the page

## Template blocks

### text

Example:

```YAML
- type: text
  id: box
  content: >
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vivamus quis est sed ipsum sagittis consequat tempor quis neque.
  align: left
```

Options:

|Attribute|Default|Description
|---|---|---
|id|none|This will identify the component, in the future you can use it to style a component.
|content|none|The text that is used on the component
|align|left|The alignment of the text

### highlight

Example:

```YAML
- type: highlight
  weight: 1
  id: highlight
  content: Welcome to VYWC testing homepage. Crafted with YAML!
  align: center
```

Options:

|Attribute|Default|Description
|---|---|---
|id|none|This will identify the component, in the future you can use it to style a component.
|weight|1|The highlight weight used on the component (From 1 to 6)
|content|none|The text that is used on the component
|align|left|The alignment of the text

More template blocks soon...

LICENSE
=======

The MIT License (MIT)

Copyright (c) 2018 Sinésio Couceiro.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
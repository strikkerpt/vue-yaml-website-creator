# vue-yaml-website-creator
Create a simple static website using yaml, vue and bootstrap will take care of the rest.

More information soon...

## Components

#### text

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

#### highlight

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

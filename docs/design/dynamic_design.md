# Dynamic design with UI logics

Lasca converts your Figma design to HTML & CSS almost perfectly.

But when it comes to **responsive web design** and **dynamic design with UI logics**, you should follow a few rules.

## How to setup dynamic design with UI logics?

With Lasca, you can setup four types of UI logics which are **condition**, **loop**, **variable** and **event**, to make dynamic design. Then, how to express dynamic design precisely? Please follow a few rules below.

### 1. Condition

When you setup condition, you need to choose how the design will behave, **box layout** or **absolute layout**.

**Box layout**

If you want the design behaves as box layout that is like CSS box model, you should use Figma's auto layout.

For example, the design you use auto layout behaves like the following way.

- When the condition expresses `false` value and the design is hidden, the sibling design are included by the parent layer with auto layout will wrap around

<video width="100%" controls>
  <source src="/video/figma_condition_box_layout.mp4" type="video/mp4" />
</video>

**Absolute layout**

If you want the design behaves as absolute layout that is like CSS `position: absolute;`, don't use Figma's auto layout.

For example, the design you don't use auto layout behaves like the following way.

- When the condition expresses `false` value and the design is hidden, the sibling design are included by the parent layer with auto layout will not wrap around

<video width="100%" controls>
  <source src="/video/figma_condition_absolute.mp4" type="video/mp4" />
</video>

::: tip Tips
Do you know how to use constraint and resizing of auto layout? You can learn how to use them in the following page.

- Constraint: [Apply Constraints to define how layers resize](https://help.figma.com/hc/en-us/articles/360039957734-Apply-Constraints-to-define-how-layers-resize)
- Resizing of auto layout: [Create dynamic designs with auto layout](https://help.figma.com/hc/en-us/articles/360040451373-Create-dynamic-designs-with-auto-layout)
:::

### 2. Loop

When you setup loop, you need to use Figma's auto layout to the parent layer that includes child layers.

<video width="100%" controls>
  <source src="/video/figma_loop.mp4" type="video/mp4" />
</video>

### 3. Variable

When you setup variable that are expected to cause a line break depending on the length of the character length, you need to use Figma's auto layout.

<video width="100%" controls>
  <source src="/video/figma_variable.mp4" type="video/mp4" />
</video>

### 4. Event

No special configuration is required in Figma.

## Testing

If you want to make sure that Figma design will be converted precisely, [you can test in this way](/design/test.md).

## Download sample Figma design

If you want to try Lasca before setting up your Figma design, you can use the sample Figma design we've prepared here.

Lasca sample: [SaaS Web Application](https://www.figma.com/community/file/1020205831193643386)
# Responsive web design

Lasca converts your Figma design to HTML & CSS almost perfectly.

But when it comes to **responsive web design** and **dynamic design with UI logics**, you should follow a few rules.

## How to setup responsive web design?

How to express responsiveness precisely? Please follow a few rules here.

1. Express responsiveness in Figma
2. If necessary, create Figma frames for each breakpoints

### 1. Express responsiveness in Figma

To express responsive web design, you can use Figma's constraint and resizing of auto layout. Lasca will convert all behavior you set up with them in Figma.

<video width="100%" controls>
  <source src="/video/figma_responsive.mp4" type="video/mp4" />
</video>

::: tip Tips
Do you know how to use constraint and resizing of auto layout? You can learn how to use them in the following page.

Constraint: [Apply Constraints to define how layers resize](https://help.figma.com/hc/en-us/articles/360039957734-Apply-Constraints-to-define-how-layers-resize)
Resizing of auto layout: [Create dynamic designs with auto layout](https://help.figma.com/hc/en-us/articles/360040451373-Create-dynamic-designs-with-auto-layout)
:::

### 2. If necessary, create Figma frames for each breakpoints

If you can't express all of responsive web design behavior in a single Figma frame, please create Figma frames for each breakpoints and you can sync them to a single Lasca component.

<video width="100%" controls>
  <source src="/video/imported_figma.mp4" type="video/mp4" />
</video>

## Testing

If you want to make sure that Figma design will be converted precisely, [you can test in this way](/design/test.md).

## Download sample Figma design

If you want to try Lasca before setting up your Figma design, you can use the sample Figma design we've prepared here.

Lasca sample: [SaaS Web Application](https://www.figma.com/community/file/1020205831193643386)
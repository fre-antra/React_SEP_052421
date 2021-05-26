# Homework 1 Sign Up pgae using HTML & CSS

## Basic Layout

- Contains a Header section to hold the title (Sign Up).
- Contains the form section
  - Input fields section which has splitinput and regular input divs
  - Terms and Conditions div
  - Buttons div

## Container

- The container was styled to keep all the children elements in the center of the screen using fixed position.

## Input styles

- The input fields and the layout was styled using the flexbox layout and the input fields have a min-max width of 550 px so that they do not take up the whole space of the screen on larger screens. For smaller screens min-width is 300px.
- The **labels** tag was not used in this section because the goal was to mimic the screenshot which did not have labels but rather had placeholder. Labels can be assigned by giving them a name and a **for** attribute connected to the id and name of an input.

## Buttons

- The register button was assigned an input style of submit becuase that is the main button to carry out the function for this page.
- The signin button was assigned an input style of button because it will be used for navigatiing to a different component or page which does not require the type of submit.

## Terms and Conditions

- The terms and conditions has a checkbox and a corresponding label.
- The I agree text of the checkbox disappears on smaller screens as shown in the demo in the training session.

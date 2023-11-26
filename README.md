# Signature Pad - Canvas Based Drawing Tool

Welcome to the Signature Pad repository! This innovative tool provides a smooth and responsive canvas-based solution for digital signature capture and drawing. Designed with simplicity and flexibility in mind, it's perfect for applications requiring signature or freehand drawing functionalities. Whether you're implementing an e-signature feature in your web application, creating forms that require a signature, or simply need a drawing interface, this Signature Pad is your go-to solution.

## Key Features
- **Easy Integration**: Seamlessly integrates with web pages and forms.
- **Customizable Appearance**: Style the canvas, including stroke color and width, to match your application's design.
- **Responsive and Intuitive**: Optimized for both desktop and touch devices.
- **Data Extraction**: Easily extract the drawn content in a variety of formats.
- **Secure and Reliable**: Implements best practices to ensure data integrity.

## Ideal Use Cases
- E-Signature collection in web forms.
- Drawing tool for online applications.
- Annotation tool in web-based document or image editors.
- Interactive feedback or comment sections on websites.

## Using the Signature Pad Tool

This guide will help you integrate and use the Signature Pad in your web application. Follow these simple steps:

### Prerequisites

Ensure you have the following prerequisites installed and set up:
- A modern web browser (e.g., Chrome, Firefox, Safari)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/XAINJATT/signature-pad.git
   ```

2. **Include the Script**
   Add the Signature Pad script to your HTML file:
   ```html
   <script src="path/to/signature-pad.js"></script>
   ```

### Integration

1. **HTML Setup**
   Add a canvas element to your HTML where you want the Signature Pad to appear:
   ```html
   <canvas id="signature-pad" width="400" height="200"></canvas>
   ```

2. **JavaScript Initialization**
   Initialize the Signature Pad in your JavaScript file:
   ```javascript
   $(document).ready(function() {
    initSignaturePad();
   });
   ```

### Configuration

Customize the Signature Pad by adjusting its settings in the `signData` object:

```javascript
const signData = {
    clearBtn: $("#clear"), //Button to clear signatures
    saveBtn: $("#save"), // Button to clear signatures
    canvas: $("#signature-pad"), // Canvas Element ID
    returnUrl: $("#signature_value"), // Input where returned URL will be Stored
    ajaxUrl: "/saveSignature", // Example URL
    customer_id: $("#customer_id").val(), // Customer Whose Signatures ARE
    csrfToken: $("#_token").val(), //CSRF TOKEN for
    strokeColor: 'blue', // Set your desired stroke color
    strokeWidth: 3,      // Set your desired stroke width
};
```

### Usage

- **Draw Signature**: Simply use your mouse or finger to draw on the canvas.
- **Save Signature**: Click the save button to retrieve the signature data.
- **Clear Canvas**: Use the clear button to erase the current signature.

### Example

Here's a simple example of how to use the Signature Pad:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Signature Pad Example</title>
    <script src="path/to/signature-pad.js"></script>
</head>
<body>
    <canvas id="signature-pad" width="400" height="200"></canvas>
    <button id="save">Save</button>
    <button id="clear">Clear</button>

    <script>
        // Initialization code here
    </script>
</body>
</html>
```

---

## Contribute
Contributions are welcome! Whether it's feature enhancement, bug fixes, or documentation improvements, feel free to fork this repository and submit a pull request.

## Stay Updated
Star or watch this repository to stay updated with new features and improvements.

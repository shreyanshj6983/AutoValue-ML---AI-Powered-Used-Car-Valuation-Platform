# AutoValue-ML---AI-Powered-Used-Car-Valuation-Platform

![image](https://github.com/user-attachments/assets/6ab0ee7c-71c8-4306-bfe6-ca10d3b68729)

A modern, interactive web application that predicts used car prices using machine learning. This Flask-based application features a card-based UI for input selection and provides instant price estimations.

## Features

- Card-based input selection for intuitive user experience
- Real-time price prediction using machine learning
- Responsive design that works on all devices
- Interactive UI with visual feedback
- Detailed form validation

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/car-price-predictor.git
   cd car-price-predictor
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   python app.py
   ```

5. Open your browser and visit:
   ```
   http://localhost:8080
   ```

## File Structure

```
car-price-predictor/
├── app.py                # Flask application
├── static/
│   ├── style.css         # Main stylesheet
│   └── script.js         # Interactive JavaScript
├── templates/
│   └── index.html        # Main HTML template
├── linear_model.pkl      # Machine learning model
└── README.md            # This file
```


### 1. Main Interface
![image](https://github.com/user-attachments/assets/7ff36064-1f84-4939-be3c-564cca00b7f6)

The main interface features a clean, modern design with a gradient background. Key elements include:
- **Header section** with the app name ("AutoValue Predictor") and brief description
- **Input cards** organized in a grid layout for each category (Brand, Fuel Type, etc.)
- Each card displays an icon and text label for clear identification
- The form maintains the original color scheme with blue accents
- Submit button with hover effects at the bottom

### 2. Values Entered
![image](https://github.com/user-attachments/assets/3ff74c54-1f8a-4423-b64e-984c883f7b2b)

This image shows the interface with sample values selected:
- **Model Year**: 2018 (entered in the number input field)
- **Mileage**: 45,000 (entered in the number input field)
- **Brand**: Toyota (selected card highlighted in blue)
- **Fuel Type**: Hybrid (selected card highlighted)
- **Transmission**: Automatic (selected card highlighted)
- **Accident History**: None reported (selected card highlighted)
- **Clean Title**: Yes (selected card highlighted)
- Visual feedback shows all required fields have been properly selected

### 3. Result Display
![image](https://github.com/user-attachments/assets/52b31739-a33b-4621-9d4b-c8a4393e57b5)

The result screen appears after form submission:
- **Prediction Card**: Displays prominently at the bottom of the form
- **Estimated Value**: Formatted as currency (e.g., "$23,450.00")
- **Additional Information**: Brief note about the estimate basis
- **Visual Effects**: The result card pulses gently to draw attention
- The form remains visible with all selected values maintained
- The submit button returns to its original state after processing

## Dependencies

- Python 3.8+
- Flask
- Pandas
- scikit-learn
- joblib

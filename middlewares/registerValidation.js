const { body } = require("express-validator");

exports.registerValidation = [

    // Full Name
    body("fullName.firstName")
        .notEmpty().withMessage("First name is required"),

    body("fullName.middleName")
        .optional()
        .isString().withMessage("Middle name must be string"),

    body("fullName.lastName")
        .notEmpty().withMessage("Last name is required"),

    // Store Name
    body("storeName")
        .notEmpty().withMessage("Store name is required"),

    // Location
    body("location")
        .notEmpty().withMessage("Location is required"),

    // Contact Number (India)
    body("contactNo")
        .matches(/^[6-9]\d{9}$/)
        .withMessage("Invalid mobile number"),

    // Email (Only Gmail)
    body("email")
        .isEmail().withMessage("Invalid email")
        .matches(/@gmail\.com$/)
        .withMessage("Only Gmail allowed"),

    // GST Number
    body("gstNo")
        .matches(
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/
        )
        .withMessage("Invalid GST number"),

    // Store License Number
    body("storeLicNo")
        .matches(/^[A-Za-z0-9]{6,}$/)
        .withMessage("Invalid store license number"),

    // ClinixPay License Key (12 digits)
    body("clinixPayLicKey")
        .matches(/^\d{12}$/)
        .withMessage("ClinixPay key must be exactly 12 digits")
];

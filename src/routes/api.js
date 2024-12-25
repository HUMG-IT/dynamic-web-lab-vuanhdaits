const express = require('express');
const router = express.Router();
const { submitName } = require('../controllers/nameController');
// Import hàm `getBMI` từ `bmiController` để xử lý yêu cầu tính chỉ số BMI
const { getBMI } = require('../controllers/bmiController');

/**
 * Route cho endpoint `/submit`
 * 
 * Route này nhận yêu cầu POST từ client với tên người dùng và
 * gọi hàm `submitName` từ `nameController` để thêm tên vào danh sách.
 * 
 * @route POST /api/v1/submit
 * @access Public
 * @returns {Object} JSON - Trả về thông điệp chào và danh sách tên.
 */
router.post('/submit', submitName);

/**
 * Route cho endpoint `/bmi`
 * 
 * Route này nhận yêu cầu POST từ client với thông tin chiều cao và cân nặng,
 * gọi hàm `getBMI` từ `bmiController` để tính và phân loại chỉ số BMI.
 * 
 * @route POST /api/v1/bmi
 * @access Public
 * @returns {Object} JSON - Trả về chỉ số BMI và phân loại.
 */
router.post('/bmi', getBMI);

module.exports = router;
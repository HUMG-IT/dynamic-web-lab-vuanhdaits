/**
 * Module xử lý yêu cầu tính toán chỉ số BMI từ client
 * 
 * Các chức năng chính:
 * - Nhận thông tin cân nặng và chiều cao từ client.
 * - Tính toán chỉ số BMI.
 * - Phân loại chỉ số BMI.
 * - Trả về phản hồi JSON chứa BMI và phân loại.
 */

const { calculateBMI, classifyBMI } = require('../models/bmi');

/**
 * Hàm `getBMI`
 * 
 * Hàm này xử lý yêu cầu POST chứa thông tin cân nặng và chiều cao từ client,
 * tính toán chỉ số BMI, phân loại chỉ số BMI, và trả về phản hồi JSON.
 * 
 * @function getBMI
 * @param {Object} req - Đối tượng request từ client, chứa cân nặng và chiều cao trong `req.body`.
 * @param {Object} res - Đối tượng response để gửi phản hồi JSON về cho client.
 * 
 * @example
 * // Yêu cầu từ client:
 * // POST /getBMI
 * // Body: { "weight": 70, "height": 175 }
 * 
 * // Phản hồi:
 * // {
 * //   "bmi": "22.86",
 * //   "classification": "Bình thường"
 * // }
 */
const getBMI = (req, res) => {
    const { weight, height } = req.body;  // Lấy cân nặng và chiều cao từ yêu cầu của client
    const bmi = calculateBMI(weight, height); // Tính toán chỉ số BMI
    const classification = classifyBMI(bmi);  // Phân loại chỉ số BMI
    res.json({ bmi, classification }); // Trả về JSON chứa chỉ số BMI và phân loại
};

module.exports = { getBMI };
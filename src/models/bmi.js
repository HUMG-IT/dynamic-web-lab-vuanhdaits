/**
 * Module quản lý chỉ số BMI
 * 
 * Module này lưu trữ các phương thức để tính toán chỉ số BMI và phân loại chỉ số BMI.
 * 
 * Các phương thức:
 * - Tính chỉ số BMI từ cân nặng và chiều cao.
 * - Phân loại chỉ số BMI dựa trên các mức độ.
 */

const calculateBMI = (weight, height) => {
    // Chuyển chiều cao từ cm sang m và áp dụng công thức BMI
    const bmi = weight / Math.pow(height / 100, 2);
    // Trả về chỉ số BMI với 2 chữ số thập phân
    return bmi.toFixed(2);
};

/**
 * Hàm phân loại chỉ số BMI
 * 
 * Hàm này phân loại chỉ số BMI dựa trên các mức độ.
 * 
 * @function classifyBMI
 * @param {number} bmi - Chỉ số BMI cần phân loại.
 * @returns {string} - Phân loại theo chỉ số BMI.
 * 
 * @example
 * classifyBMI(22.5);
 * // Kết quả: "Bình thường"
 */
const classifyBMI = (bmi) => {
    bmi = parseFloat(bmi); // Chuyển giá trị BMI sang số để so sánh

    if (bmi < 18.5) {
        return "Gầy";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Bình thường";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Thừa cân";
    } else {
        return "Béo phì";
    }
};

module.exports = { calculateBMI, classifyBMI };
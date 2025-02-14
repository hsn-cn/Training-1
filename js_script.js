<html><head></head><body><script type="text/javascript" id="dcoder_script">// ملف البرمجة
function showMessage(message) {
    alert(message);
}

function showVideo(url) {
    window.open(url, '_blank');
}

function showDay(dayId) {
    const days = document.querySelectorAll('.day');
    days.forEach(day => day.style.display = 'none');
    document.getElementById(dayId).style.display = 'block';
}

// عرض اليوم الأول بشكل افتراضي
window.onload = function() {
    showDay('day1');
};</script></body></html>
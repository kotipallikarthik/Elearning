function showCourseDetails(courseId) {
    var details = document.querySelectorAll('.course-detail');
    details.forEach(function(detail) {
        detail.style.display = 'none';
    });

    var selectedCourse = document.getElementById(courseId);
    selectedCourse.style.display = 'block';
}

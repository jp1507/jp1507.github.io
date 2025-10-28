document.addEventListener('DOMContentLoaded', () => {
    // 1. 필요한 요소들을 ID로 가져옵니다.
    const toggleButton = document.getElementById('series-toggle');
    const seriesList = document.getElementById('series-list');
    
    // 2. 두 요소 모두 존재하는지 확인 (시리즈 목차가 없는 포스팅에서는 실행되지 않도록)
    if (toggleButton && seriesList) {
        
        // 3. 버튼 클릭 이벤트 리스너를 추가합니다.
        toggleButton.addEventListener('click', () => {
            // 현재 펼침 상태인지 확인 (expanded 클래스가 있는지)
            const isExpanded = seriesList.classList.contains('expanded');

            // 4. 클래스 토글 및 버튼 텍스트/접근성 정보 업데이트
            if (isExpanded) {
                // 현재 펼쳐진 상태이므로 -> 접기(Collapse)
                seriesList.classList.remove('expanded');
                seriesList.classList.add('collapsed');
                toggleButton.setAttribute('aria-expanded', 'false');
                
                // 버튼 텍스트 및 아이콘 업데이트
                toggleButton.querySelector('span').textContent = "시리즈 목차 [펼치기]";
                toggleButton.querySelector('#toggle-icon').classList.replace('fa-chevron-up', 'fa-chevron-down');

            } else {
                // 현재 접힌 상태이므로 -> 펼치기(Expand)
                seriesList.classList.remove('collapsed');
                seriesList.classList.add('expanded');
                toggleButton.setAttribute('aria-expanded', 'true');
                
                // 버튼 텍스트 및 아이콘 업데이트
                toggleButton.querySelector('span').textContent = "시리즈 목차 [접기]";
                toggleButton.querySelector('#toggle-icon').classList.replace('fa-chevron-down', 'fa-chevron-up');
            }
        });
    }
});
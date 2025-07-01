module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 1. ‘subject-case’라는 규칙 정의
    // 2. ‘2’는 규칙을 적용할지 여부 지정 ( 0은 비활성화, 1은 경고, 2는 오류 )
    // 3. ‘always’는 항상 규칙을 적용하도록 지정
    // 4. ‘lower-case’ 는 소문자로 시작하는 문장 케이스 요구
    "type-case": [2, "always", "lower-case"],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-full-stop": [2, "never", "."],
    "type-enum": [
      2,
      "always",
      [
        "feat", // 새로운 기능
        "fix", // 버그 수정
        "docs", // 문서 변경
        "style", // 코드 포매팅, 세미콜론 누락 등
        "refactor", // 코드 리팩토링
        "perf", // 성능 개선
        "resolve", // 병합 충돌 등 문제 해결
        "chore", // 빌드 업무, 패키지 매니저 설정 등
        "ci", // CI 설정 변경
        "build", // 빌드 시스템 변경
        "revert", // 이전 커밋 되돌리기
      ],
    ],
    "subject-max-length": [2, "always", 50],
    "header-max-length": [2, "always", 72],
  },
};

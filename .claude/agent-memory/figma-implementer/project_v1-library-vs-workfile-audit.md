---
name: v1-library-vs-workfile-audit
description: "법틀 디자인시스템 v1" 라이브러리 파일(jRZzfr9vGsyGKCvT5HS0Gp)과 작업 파일(mp4KoPM2jqzU2N9yGVBSrf) node 4817-57947 섹션을 실제 대조한 핸드오프 감사 결과. 레거시 "4394:4xxxx" 세대와 v1 세대가 섹션 안에 공존함을 확인.
metadata:
  type: project
---

2026-10-02 조사 결과 (순수 조사, 수정 없음):

**라이브러리 파일 구조** (`jRZzfr9vGsyGKCvT5HS0Gp`): top-level 페이지는 get_metadata로 "01 Tokens"(0:1, Primitive/Semantic/Typography/Spacing&Radius/Elevation/Layout 섹션)만 노출되지만, 실제로는 "02 Components"(1:2, canvas)에 전체 컴포넌트 라이브러리가 있음 — get_metadata 인덱싱이 전체 top-level 페이지를 안 보여줄 수 있으니 URL의 node-id(1:2)를 직접 질의해야 함. 02 Components 안에 Icon(13:51), Chip(17:2), Signal(29:33), Checkbox(31:24), Button(44:66: Button/Basic 44:65 + Button/Icon 79:62), Input(45:63), Avatar(62:43), Radio(82:75), Toggle(82:85), Link(82:111: Link 82:110 + TextButton 326:1590), Tab(83:78), Table(91:160), Form(98:423), Selection(98:502: Checkbox/Label 98:448), Header/Detail/Editor/Calendar/Popup/Badge/Modal/Result Card/LNB 등 섹션 존재.

**변수 네이밍 확정**: get_variable_defs(library, node 1:5 Semantic)로 직접 확인한 결과 `var(--color-brand-primary)` = #2563eb, `var(--color-overlay-dim)` = #00000073. 즉 **v1 라이브러리의 공식 변수 네이밍은 CSS-literal 스타일(`--color-*`, `--spacing-*`, `--radius-*`)**이 맞음. 작업 파일에서 보이는 `--brand/primary`, `--radius/xs`, `--8`(숫자만) 같은 슬래시/숫자 전용 네이밍은 전부 **레거시(사전 v1) 잔재**이지, "두 가지 공존하는 현재 규칙"이 아님.

**Button 3세대 확정**: 라이브러리 정본은 44:65 "Button/Basic" (Kind=Primary/Secondary/Tertiary/Solid/Negative × Size=Medium/Small × State=Default/Hover/Disabled × Shape=Default/Pill, 콤마 네이밍). 작업파일 섹션(4817:57947) 안에서는 이 정본을 직접 쓰는 Button/Basic 텍스트버튼 인스턴스가 **하나도 없음**. 대신: (1) "Button / Basic"(레거시, child ref 4394:42115, 26개, --brand/primary 등 슬래시 토큰), (2) "Button / Basic/Secondary/Small/Default/Left" 등 슬래시 경로 네이밍(child ref 3354:26935~26941, 16개, `--blue/600` 원시 팔레트 변수 직접 사용 — semantic 토큰 우회), (3) v1 신세대는 Button/Icon(마스터 4938:30529, 1개 사용)과 TextButton(마스터 4941:31223, 8개 사용)만 확인됨 — 즉 텍스트 Button만 구세대로 남아있고 아이콘버튼/텍스트버튼은 이미 마이그레이션됨.

**Link↔TextButton 오용 확정 및 범위 확장**: "Link - 수정"(2개)뿐 아니라 레이어명이 그냥 "Link"인 인스턴스(삭제, 자연어로 수정 등 비-네비게이션 액션에 쓰이는 것 다수 포함 총 17개)도 전부 마스터 4394:41386 사용. "Link - 목록으로"(5개)만 실제 네비게이션이라 올바른 사용. TextButton(마스터 4941:31223, 설명에 "수정 같은 액션 트리거용, Link(82:110)의 sibling"이라 명시)은 이미 8곳에서 정상 적용됨 — 마이그레이션이 "진행 중이나 미완료" 상태.

**Checkbox 불일치 정밀화**: 직접 샘플링한 메인 바디/모달 내부 체크박스(4817:58605, 4817:58622 등, "law_dropdown" 프레임을 수동으로 펼쳐 만든 버전 포함)는 전부 진짜 마스터 4394:41276의 인스턴스. 반면 **접힌 상태로 남아있는 "law_dropdown" 컴포넌트 인스턴스**(4873:50167, 4873:50618, 4908:24978, 4908:25101, 4908:25104 — 5개 화면)는 내부에 진짜 Checkbox 인스턴스가 아니라 4873:49957이라는 **별도의 로컬 복제 마스터**(이름도 "Checkbox", 설명문까지 복붙됨)로 만든 가짜 체크박스를 씀. 즉 문제는 "본문 vs law_dropdown"이 아니라 "law_dropdown을 수동으로 펼쳐서 다시 만든 화면(정상) vs law_dropdown을 컴포넌트 인스턴스로 그대로 둔 화면(마스터가 어긋남)"의 구조적 불일치임. 교체만으로 해결 불가 — 후자 인스턴스들은 Figma에서 law_dropdown 컴포넌트 자체를 재작업해야 함.

**Icon 로컬 복제 확정 + 출처 정정**: "Icon"(4859:61, 작업파일 내 4926:27910과 동일 패밀리로 추정) 컴포넌트 설명에 "원본 파일(mp4KoPM2jqzU2N9yGVBSrf)의 'Icon / Basic' 컴포넌트셋(44 variant, 리뷰보드 페이지 node 3353:27091)을 정본으로 채택해 이식"이라고 명시됨. 즉 **외부 v1 라이브러리 파일이 아니라 작업 파일 자체의 다른 페이지("리뷰보드")에서 포팅**된 것. REMOTE 라이브러리 컴포넌트 'Icon / Bagic'(오타, key `02b285b541aa34da428968167337e27140fde854`)은 이 Basic 세트의 부분집합일 뿐 별도 컴포넌트가 아님도 설명에 확인됨. "Upload 2"/"Menu 2"는 원본 중복 이름 회피용으로 의도적으로 지어짐(버그 아님).

**새로 발견된 추가 불일치 (샘플링 확장)**: Toggle(마스터 4394:41373, 작업파일에서 8개 다 이 레거시 마스터 사용, 슬래시 토큰 `--brand/primary`,`--radius/full`)도 Button/Link/Checkbox와 동일하게 레거시 4394세대에 머물러 있음. Chip/DeletableLabel(16개, child ref 4394:41584 "Chip / Label" 기반 합성, 레거시 토큰)은 **v1 라이브러리 Chip 섹션에 "DeletableLabel"이라는 variant가 아예 없음** — Chip/Label(레거시)+아이콘을 조합한 로컬 합성 컴포넌트로 보이며 라이브러리에 대응 정본이 없는 갭. 반면 Chip_s(마스터 21:2, 작업파일에서 신세대 `--color-primitive-gray-100`,`--spacing-8`,`--radius-xs` 토큰 사용)는 이미 올바르게 마이그레이션됨.

**결론**: "레거시 4394:4xxxx 세대(슬래시/숫자 토큰) vs v1 CSS-literal 토큰 세대"의 미완료 마이그레이션이 Button/Link/Checkbox/Toggle/Chip(DeletableLabel) 최소 5개 패밀리에 공통적으로 나타나는 **하나의 근본 원인**이며, 개별 버그가 아니라 시스템 전체의 마이그레이션 부채로 봐야 함. TextButton/Button-Icon/Chip_s는 이미 신세대로 전환 완료된 대조군.

**Why:** 사용자가 이전 샘플링 감사에서 나온 5개 의심 항목을 v1 라이브러리 실물 데이터로 재확정해달라고 요청. get_variable_defs로 라이브러리의 실제 바인딩된 변수명을 직접 확인해 "두 네이밍이 동등하게 공존"이 아니라 "레거시 vs 정식 v1"이라는 비대칭 구조임을 검증함.

**How to apply:** 이 섹션(4817:57947) 또는 동일 패턴을 쓰는 다른 핸드오프 대상 구현 요청이 들어오면, Button/Link/Checkbox/Toggle/Chip/DeletableLabel 인스턴스를 만날 때마다 "레거시 4394 계열이면 코드에서 바로 신세대 토큰(--color-_, --spacing-_, --radius-*)으로 치환해 구현하고, law_dropdown류 접힌 컴포넌트 인스턴스는 내부 구조가 다를 수 있으니 반드시 get_design_context로 실제 자식 구조를 펼쳐 확인 후 구현"할 것. 관련: [[project_link-vs-button-recheck]], [[project_link-vs-action-button-naming]]

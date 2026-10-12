# 디자인시스템 재구축 — 진행상태

> 새 세션에서 이 작업을 이어갈 때는 이 파일부터 읽을 것. 전체 계획 원본: `/Users/rsj/.claude/plans/purrfect-sauteeing-panda.md`

## 확정된 방향 (변경 시 여기도 갱신)

| 항목           | 결정                                                                                                                                                                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 파일 구조      | 별도 "법틀 디자인시스템" Figma 파일 신설 + 팀 라이브러리 퍼블리시. 작업 파일(mp4KoPM2jqzU2N9yGVBSrf)은 구독해서 인스턴스만 배치                                                                                                        |
| 브레이크포인트 | 컴포넌트는 auto-layout fill/hug 진짜 반응형. 브레이크포인트별 차이(마진/거터/컨테이너폭)는 `Layout` 변수 Mode 4종(1920/1600/1440/1200)으로 분리 관리                                                                                   |
| 작업 범위      | 기초(토큰/컴포넌트) + 핵심 제품화면 10종 + 계약상세 + 자문상세 + 통합검색. 계약/자문상세·통합검색은 이미 별도 진행 중인 워크스트림이라 착수 전 재조사 필수                                                                             |
| Figma 파일     | 작업 파일: `mp4KoPM2jqzU2N9yGVBSrf` ("1. 법틀 법무솔루션 2.9"), 리뷰보드 페이지 node `2384:1177`                                                                                                                                       |
| 레퍼런스 파일  | `jIf2n4h78JlmtK7ws5yYjA`, node `2004:1134` — atomic 조립 컨벤션 참고용                                                                                                                                                                 |
| 신규 DS 파일   | 생성 및 퍼블리시·구독 완료: "법틀 디자인시스템 v1", fileKey `jRZzfr9vGsyGKCvT5HS0Gp`, libraryKey `lk-da31615fa211442536ea091a21cd79d08594b1c9f5240fffff067b21aa2e61f7083a29e899dd6307985cb9b5e94b9fca4cc08f45e071a99835100f2deaf7a497` |

## Phase 체크리스트

- [x] **P0** — 신규 DS 파일 생성, 토큰/변수 이관·신설·퍼블리시·작업 파일 구독 전부 완료 및 검증됨 (Color/Typography/Elevation 임포트·바인딩·resolve 테스트 통과)
- [x] **P1** — Atom 컴포넌트 (Icon 통합, Chip/Label, Signal Badge, Checkbox, Button, Input, Avatar) — 완료 (단, `Status`는 신규 파일에 없음 → 열린 항목 #1)
- [x] **P1.5** — 원자 갭 채우기 (Button 확장/Icon, Radio, Toggle, Link, Textarea, Tab, Close Circle, 아이콘 7종 통합, Chip 아이콘 연결) — 완료. 리뷰보드 실사용 집계(인스턴스 5,001 / 고유 컴포넌트 158종)로 감사 후 진행
- [ ] **P2** — Molecule 조립 (진행 중, 2026-09-22 기준)
  - [x] P2-1 Table 키트 + Pagination + Chip/Stage
  - [x] P2-2 Form Field/List, Checkbox/Label, Radio List, Tab Group, Choice Token + **Chip 4종 토큰 정리**
  - [x] P2-3 `Header` 재구성(자동 레이아웃) + `Detail` 행 / `Accordion Head` — 완료(2026-09-21), **퍼블리시 완료**(사용자 확인, 2026-09-22)
  - [ ] P2-4 — 진행 중
    - [x] P2-4a `calendar/day`, `Button / Open`, `Popup_list` — 완료 + 후속 버그수정 3건 포함 전부 퍼블리시 완료(2026-09-22)
    - [x] P2-4b 카드류(프로젝트 카드·요약 카드 3종·`contents_mainlist`·`RecentViewed_Item`) + 신규 `Chip / Status Text` — 완료(2026-09-22, 미퍼블리시). **Graph는 보류**(사용자 결정 — 실제 차트 라이브러리로 구현될 가능성 높아 Figma 컴포넌트화 자체를 보류)
- [x] P3 — Organism 조립 + Modal 통합 (2026-09-28 완료, 퍼블리시만 남음)
  - [x] `Modal / Confirm`, `Modal / Export` + `Overlay/Dim` 토큰 + `Icon / Status`(Warning/Success/Error) — 완료(퍼블리시는 사용자 확인 필요)
  - [x] `Input / File Dropzone`, `Modal / Comment` — 완료. Boolean 재구성 **사용자 승인 완료**(2026-09-28, 원본 스크린샷 재확인 후 승인)
  - [x] `Modal / 다중입력`(`230:992`), `Modal / Select`(`233:1115`) — 완료(2026-09-28), 기존 컴포넌트 조합만으로 제작, 신규 원자 없음
  - [x] `LNB / Filter Item`(`243:1552`, 10 variant), `Button/XL`(별도 컴포넌트, `258:1577`, 4 variant) — 완료(2026-09-28). `Button/Basic`에 합쳤던 Size=XL은 되돌림(아래 참조)
- [ ] P4 — 반응형 파일럿 검증 (계약상세 기존 파일럿 역분석 + 1920 추가)
- [ ] P5 — 핵심 제품화면 10종 롤아웃
- [ ] P6 — 진행중 워크스트림 정합화 (계약/자문상세, 통합검색). **진행 중 — 통합검색 `ResultCard`: 에이전트가 컴포넌트 제작 + DS 퍼블리시(2026-09-28) 후 원본 파일 12개 카드 인스턴스 교체 완료. 이후 사용자가 Figma를 수동으로 추가 수정(2026-09-28, 상세 경위 미기록) — `ResultCard` 컴포넌트셋에 `카드유형=자문` variant 신설(4타입×2표시상태=8 variant로 확장) + 계약/본문포함 variant에 사건번호·버전선택 `Container` 섹션 추가. 재조사(2026-09-28) 결과 원본 파일 20개 카드 중 19개가 인스턴스로 교체된 상태로 확인, 남은 예외는 자문형·본문포함 1개(B `55495`, hidden)뿐. "요약 노출" 열린 항목은 재확인 결과 미해소. 계약/자문상세는 미착수.**
- [ ] P7 — 잔재 정리 + qa-reporter 최종 QA

## 현재 상태 한눈에 (2026-09-21 기준)

**퍼블리시 상태**: P0 ~ P2-4a(calendar/day·Button / Open·Popup_list) + 버그수정 3건(Popup_list 긴 텍스트 오버플로우, Title/Text 2:1 비율+기본 프리뷰, 좌우패딩 불일치+Chip/Meta `Show Close` Boolean) + **P2-4b 전체(요약카드 3종·contents_mainlist·`Chip/Status Text`·Badge 이관·Project Card·RecentViewed Item, 페이지 위치 수정 포함)까지 퍼블리시 완료 확인**(2026-09-28 재조사, `search_design_system` updatedAt 2026-09-22T13:42~15:22Z로 라이브러리 반영 확인 — 문서에 "미완료"로 남아있던 건 갱신 누락이었음, 정정함). **P3 전체(`Overlay/Dim`·`Icon/Status`·`Modal/Confirm`·`Modal/Export`·`Input/File Dropzone`·`Modal/Comment`·`Modal/다중입력`·`Modal/Select`·`LNB/Filter Item`)는 사용자 퍼블리시 완료 확인**(2026-09-28). **단, 퍼블리시 직후 `Button/Basic` Size=XL을 철회하고 별도 `Button/XL`로 분리하는 변경을 추가로 했음 — 이 변경분(`Button/Basic` 60 variant 복귀 + 신규 `Button/XL` 4 variant)은 아직 미퍼블리시, 재퍼블리시 필요.** P6 `ResultCard`는 퍼블리시 완료 및 원본 12개 카드 교체 완료(2026-09-28), 이후 사용자가 수동으로 추가 수정해 19/20개 카드가 인스턴스로 교체된 상태(2026-09-28 재조사로 확인, 아래 P6 섹션 참조). Graph는 보류(제작 안 함).

**`02 Components` 페이지 섹션 지도** (fileKey `jRZzfr9vGsyGKCvT5HS0Gp`, 페이지 `1:2`, 좌표는 페이지 기준)

| 섹션 (node-id, 위치)            | 컴포넌트 (node-id, variant 수)                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Icon (`13:51`, 0,400)           | `Icon` `13:50`(44) · `Icon / Notification` `67:44`(2) · `Star` `67:51`(2) · `Emphasize` `67:61`(3) · `Sort` `67:77`(3) · `Arrow` `68:68`(12) · `Menu_S` `69:86`(13, Dispute 포함) · `Menu_M` `72:50`(14) · `Icon / Close Circle` `85:47`                                                                                                                       |
| Chip (`17:2`, 500,400)          | Selection UI 프레임 `17:3`: `Chip / Label` `18:12`(5) · `Chip / Meta` `20:80`(9) · `Chip_s` `21:2` · `Chip / Stage` `90:69`(2) · `Choice Token` `98:558`(2) / Tags 프레임 `17:4`: `Tag / File` `21:4`                                                                                                                                                          |
| Signal (`29:33`, 1500,400)      | `Signal Badge` `28:41`(4) — ⚠️ `Status`는 없음                                                                                                                                                                                                                                                                                                                 |
| Checkbox (`31:24`, 2600,400)    | `Icon / Check` `31:4` · `Checkbox` `31:23`(6)                                                                                                                                                                                                                                                                                                                  |
| Button (`44:66`, 3049,400)      | `Button/Basic` `44:65`(60: Kind5×Size2×State3×Shape2 + 좌/우 아이콘 슬롯) · `Button/Icon` `79:62`(3)                                                                                                                                                                                                                                                           |
| Input (`45:63`, 4413,400)       | `Input/Field` `45:62`(18) · `Search` `46:65`(15) · `Dropdown` `47:70`(12) · `Date` `47:119`(12) · `Textarea` `82:135`(6)                                                                                                                                                                                                                                       |
| Avatar (`62:43`, 1500,701)      | `Avatar` `62:42`(4)                                                                                                                                                                                                                                                                                                                                            |
| Radio / Toggle / Link (y=2300)  | `Radio` `82:74`(6) @0 · `Toggle` `82:84`(4) @600 · `Link` `82:110`(6) @1200(섹션 `82:111`, 네비게이션용, 기본부터 항상 밑줄 — 열린 항목 #28 수정 완료) · `TextButton` `326:1590`(6, 섹션 `82:111` 내부 Link 오른쪽, 액션 트리거용, hover 시 `Blue/800`로만 진해짐·밑줄 없음, 2026-10-01 생성·**퍼블리시 완료**, 코드 `src/components/ui/TextButton` 반영 완료) |
| Tab (`83:78`, 1800,2300)        | `Tab/Pill` `83:77`(10) · `Tab/Underline` `84:63`(4) · `Tab Group` `98:545`(2) · `Segment` `334:1584`(6: Selected×State) · `Segmented` `334:1585`(조립, Segment 인스턴스 3개+3번째 `Show` boolean, 2026-10-01 생성·**퍼블리시 완료**, 코드 `src/components/ui/Segmented` 반영 완료, 열린 항목 #30 참조)                                                         |
| Table (`91:160`, 0,2900)        | `Table/Header Cell` `91:133`(4) · `Table/Cell` `91:159`(7) · `Table/Row` `92:178`(3) · `Table/Header Row` `92:179` · 조립 예시 프레임 `92:590` · `Pagination/Item` `93:415`(4) · `Pagination` `93:416` · `Pagination/Bar` `93:437`                                                                                                                             |
| Form (`98:423`, 1800,2900)      | `Form Field` `98:383`(5) · `Form List` `98:422`(2)                                                                                                                                                                                                                                                                                                             |
| Selection (`98:502`, 1800,3700) | `Checkbox/Label` `98:448`(6) · `Radio List` `98:501`(2)                                                                                                                                                                                                                                                                                                        |
| Header (`108:445`, y=5200)      | 조립 프레임(variant 없음) `108:446` — space-between 오토레이아웃, elevation3 적용                                                                                                                                                                                                                                                                              |
| Detail (`109:463`)              | `Detail Row` `109:522`(Type: Chip/Meta·Date·RadioList·Field·Toggle·ReadonlyText·Dropdown·ChangeIconSingle·UserPill, 9) · `Accordion Head` `111:654`(Open/Show Meta boolean) · 조립 예시 `121:578`                                                                                                                                                              |
| Detail Molecules (`122:667`)    | `LinkedChipList` `121:517` · `AlarmComposite` `121:548`                                                                                                                                                                                                                                                                                                        |
| Editor (`116:477`)              | `Rich Text Editor` `129:677`(COMPONENT_SET, Density: Full `116:478`/Compact `129:642`, Title·Show Author 공유 프로퍼티) — 시안용 목업, 서드파티 에디터 대체 예정                                                                                                                                                                                               |
| calendar (`145:668`, y≥9000)    | `calendar/day` `145:691`(Type: Weekday/Saturday/Sunday × Selected, 6 + Today·Show Number bool)                                                                                                                                                                                                                                                                 |
| Button/Open (`147:668`)         | `Button / Open` `147:690`(Size×State, 5: Close/Open×Medium/Small + more/Small)                                                                                                                                                                                                                                                                                 |
| Popup (`148:673`)               | `Popup_list` `148:722`(Type: Radio_list/Check_list, 2 + 8개 컬럼 show bool)                                                                                                                                                                                                                                                                                    |

**열린 항목** (미해결 · 사용자 결정 대기 · 미확인)

1. ⚠️ **`Status` 컴포넌트 없음** — P1에서 40 variant로 완료했다고 기록됐으나 신규 파일 어디에도 없음(원인 불명). **사용자 결정(2026-09-21): 화면에서 필요해질 때 재제작.** 재제작 시 구조: `Label`(10종) × `Signal`(None/Red/Yellow/Green), 기본 None=무채색 아웃라인(위 P1 Signal 항목 참조).
2. **라벨 칩 통합 보류** — `Chip / Label`(5색)과 `Choice Token`(2색)은 같은 개념(계약명 아래 컬러 라벨)이며 **색은 사용자가 선택**(사용자 확인, 메모리 `project_label-color-user-selected`). 색 맞추려고 variant를 고치지 말 것. 통합은 사용자가 고를 수 있는 색 목록을 알려줄 때만 제안.
3. `Icon` 44종은 원본 SVG hex 그대로 **변수 미바인딩**(7종·Chip 인스턴스는 바인딩됨). 필요 시 일괄 바인딩 제안.
4. `Checkbox` Hover 색이 Primitive(`Blue/800` 등) 직결 — `Border/hover`·`Brand/PrimaryHover` 같은 시맨틱 토큰 신설 검토.
5. 아이콘 근사/미확인: `icon_direction`(→`Arrow` Medium Left/Right 추정), `LockRoundedIcon`·`SearchRoundedIcon`(축소/확대 인스턴스 추정), `KeyboardArrowUp`, `Icon / Basic / Check`. `Chip / Meta` 실사용 `Counsel`(24)·`Attachment`(43)와 신규 `Advisory`·`file`이 같은지도 미확인.
6. P3로 넘김: `icon_warnning`(40px 주황 `#FB923C`, 다운로드 팝업), `icon_button/Icon/Delete`(1회), 고아 `icon_menu/Variant13~15`, 세트 밖 `file-merge`류, MUI 9개 중 8개 미탐색, `icon_24`/`Icon_24` 위치 미특정.
7. **Table 적용 범위**: 원본에서 확인한 표는 계약 리스트뿐. 체결계약함·통합검색 등 다른 리스트 화면에 Table 키트가 맞는지 미확인(P5/P6에서 확인).
8. 원본 대비 차이 기록: `Tab/Pill` 높이 +3(S 38/L 46, 원본 Tabs 텍스트가 줄높이 19 직접 덮어씀), `Choice Token` 닫기 표시 시 +10px 폭, `Chip / Meta` 일부 +2px·`Tag / File` 137×35→134×36(Text Style 적용), `Table/Row` Hover(`Gray/50`)/Selected(`Blue/50`)·`Button/Icon` State·`Textarea` State 일부는 원본에 없는 값(기존 토큰 사용), 승인요청 알약의 인디고 `#364AED`·Go 버튼 주황 `#F47725`는 토큰이 없어 `Brand/Primary`로 매핑.
9. **미조사(P2-4b 착수 전 조사 필요)**: 카드류(프로젝트 카드·요약 카드·`contents_mainlist`·`RecentViewed_Item`), Graph. (`calendar/day`·`Popup_list`·`Button / Open`은 P2-4a에서 조사+제작 완료, 아래 #21~23 참조)
10. `Avatar` 사진형은 조사한 3페이지(법틀클라우드 2.9 / 진행중 / 리뷰보드)에서만 확인 — 법틀AI 1·2차, draft, Page 3 미조사.
11. 폰트: `AppleSDGothicNeoR00/SB00/B00` 대체 사용 — 실제 macOS 폰트가 설치된 Figma 데스크톱에서 표시 확인 필요.
12. ⚠️ **`Accordion Head`의 `Open` boolean이 Figma API 제약으로 완전 자동 동작하지 않음** — Down/Up 화살표가 각각 다른 레이어라 반전(NOT) 바인딩이 안 됨(Figma Plugin API 자체 한계). `Open=false`(기본값)는 정상, `Open=true`로 켜면 Up이 추가되고 Down이 자동으로 안 사라져 두 화살표가 겹쳐 보임 — 인스턴스에서 Down 레이어를 수동으로 숨겨야 함. Figma가 향후 지원하면 재작업 필요.
13. `Header`(`108:446`)의 로고 이미지는 Plugin API로 raster 자산을 가져올 수 없어 텍스트 워드마크("buptle")로 대체됨 — 실제 로고 자산은 나중에 수동 교체 필요. ~~프로필 아바타 placeholder~~는 **수정 완료**(2026-09-21) — 기존 `Avatar` 컴포넌트(`62:39`, Type=Default·Size=40) 인스턴스(`113:476`)로 교체, 재사용 원칙 위반 바로잡음(사용자 지적).
14. `Header` Left GNB 간격(원본 120px → `Spacing/128`로 근사, +8px 편차), 활성 메뉴 밑줄 두께(원본 4.87px → `Spacing/4`로 근사, −0.87px 편차) — 육안상 차이 미미하나 완전 일치 아님.
15. `Header`는 variant 컴포넌트가 아니라 Table 조립 예시(`92:590`)와 같은 방식의 단일 조립 프레임(`108:446`)으로 제작됨. variant 체계가 필요해지면(로그인 상태별 분기 등) 별도 작업 필요.
16. `Header` 1200px 이하 폭에서는 GNB 텍스트가 겹침(콘텐츠량 자체가 좁은 폭에 비해 많음) — 반응형 축약/스크롤 처리는 이번 범위 밖.
17. **`Chip/Meta` 중복 텍스트 레이어 버그 — 수정 완료**(2026-09-21). `Style=UserBorder/UserOnBg/UserBg` 3개 variant에 "Text"(정본, 16px)와 "text"(잘못 남은 잔재, 12.8px) 레이어가 겹쳐 있어 이름이 중복 표시되던 문제. 잔재 레이어만 삭제, 영향받은 인스턴스(Detail Row의 UserPill/ChangeIconSingle) 전부 재검증 완료.
18. **"진행상황" 타임라인+댓글 컴포넌트 — 미착수(범위 밖으로 기록만)**. 계약상세 화면에서 발견됨(원본 node 미기록, 사용자 스크린샷 기반): 승인 단계 스테퍼(초안/검토/서명 및 회수/완료) + 단계별 이벤트 로그(아바타+이름+타임스탬프+내용 카드) + 스마트 이메일/체크박스/비교보기 UI + 하단에 `Rich Text Editor`(Compact) 재사용 댓글 입력창(첨부 아이콘+AI 어시스트 아이콘+전송 버튼 추가). Detail Row/RichTextEditor보다 훨씬 큰 별도 조립체라 사용자 결정으로 이번엔 스킵 — P2-4 이후 별도 조사·계획 필요.
19. `Rich Text Editor`(`129:677`) Compact variant(`129:642`)에서 undo/redo와 outdent/indent가 같은 Arrow 아이콘을 재사용해 4개 버튼이 시각적으로 동일해 보임 — 원본은 서로 다른 아이콘이었음. 사소한 차이라 필요시에만 보정.
20. `Rich Text Editor`는 시안 목업이며 실제 화면에서 "계약요약 및 요청사항"(계약상세)이 Compact, "자문답변"(자문상세)이 Full에 대응한다는 매핑은 사용자 스크린샷 기반 추정 — 다른 화면(예: 댓글창)에서의 정확한 Density 매핑은 화면 조립 시점(P5)에 재확인 필요.
21. ⚠️ **`calendar/day` 토/일 색상 매핑 및 "Today" 점의 정확한 의미 미확인**(2026-09-22). 원본에 라벨/주석이 없어 hidden 노드 3색(Gray/600·Gray/500·Red/300)을 "Weekday/Saturday/Sunday" 축으로 추정 배치했고, 6×6 빨간 점(`Red/500`)을 "Today" 불리언으로 가정 구현함 — 실제 화면(달력 위젯) 조립 시점(P2-4 calendar 위젯 or P5)에 실사용 스크린샷으로 재검증 필요.
22. `Button / Open`은 색상이 State가 아니라 **Size 기준**(Medium=`Brand/Primary`, Small=`Contents/Secondary`)이며, 아이콘은 Button 사이즈와 무관하게 항상 `Icon/Arrow` **Size=Small** 글리프를 쓰고 아이콘 색은 텍스트 색과 다시 분리(Small 버튼은 텍스트 `Contents/Secondary`인데 아이콘은 `Border/strong`) — 원본 자체의 설계(제작 실수 아님), 원본 SVG 대조로 확인.
23. `Popup_list`의 체크 아이콘은 원래 지시(불일치 시 SVG 재현)와 다르게, 원본 Check가 실제로는 "미체크 체크박스 사각형"이라 신규 `Checkbox`(`31:17`, Selected=False)와 일치함을 발견해 그 인스턴스를 재사용함(기존 컴포넌트 재사용 원칙 우선 적용) — Radio_list의 라디오 아이콘은 재사용 가능한 단독 컴포넌트가 없어 `Border/default` 스트로크 Ellipse로 개별 재현.
24. ~~`Popup_list` FILL 텍스트 컬럼 폭이 42.25px로 매우 좁음~~ — **해소 완료**(2026-09-22). Show boolean이 꺼지면 Figma auto-layout이 자동으로 공간을 재분배하는 구조라 실사용에서는 문제 없음을 확인(산술 검증). 추가로 Title:Text 동시 노출 시 50:50 분할되던 것을 원본 실사용 관례(Title이 더 넓음) 기준 `layoutGrow` 2:1로 조정, 마스터 기본 프리뷰도 실사용 조합(File/Text/Date/LinkButton=true)으로 변경. 상세는 "Title/Text 비율 조정 + 기본 프리뷰 정리" 섹션 참조.
25. **Graph 보류**(2026-09-22, 사용자 결정) — 실제 프로덕트에서 차트 라이브러리로 구현될 가능성이 높아 이번 배치에서 Figma 컴포넌트화하지 않음. 11 variant 중 10개는 토큰 준수, `doughnut_1`만 Roboto 폰트+원시 Blue색을 쓰는 이질적 variant(조사만 완료, 필요해지면 재조사 후 진행).
26. `Project Card`/`RecentViewed Item`의 카테고리별(Advisory/Litigation) 색상 자동 전환은 이번엔 기본값(Contract)만 구현됨 — 실사용 시 인스턴스별로 아이콘/배지 색을 수동 오버라이드해야 함(원본에서 Kind별 자동 스위칭 매커니즘 자체를 조사하지 않았음).
27. `Project Card`의 하드코딩 색상(`#42464c`/`#606c80`/`#ebeef2`)을 정확 대응 토큰이 없어 `Contents/Secondary`/`Tertiary`/`Border/divider`로 근사(편차 34~39). 그림자도 `elevation_basic`으로 근사. 폰트도 Inter→Apple SD Gothic Neo로 대체하되 14px/11px 정확 대응 Text Style이 없어 리터럴 유지 — 추후 Text Style 카탈로그 확장 시 재검토 여지.
28. ~~`Link`(`82:110`) 컴포넌트 설명/실제 구현 불일치~~ — **수정 완료(2026-10-01)**. 발견 당시엔 Hover variant 텍스트가 `textDecoration: NONE`이라 밑줄이 전혀 없었음(설명엔 "Hover (underline)"이라 적혀 있어 오해 소지). 사용자 확정: Link는 hover 한정이 아니라 **기본 상태부터 항상 밑줄**이어야 함 → Size(Large/Small)×State(Default/Hover/Disabled) 6 variant 전부 `textDecoration: UNDERLINE` 적용 완료(색/폰트/크기/위치는 변경 없음, 스크린샷으로 밑줄 노출 확인). 컴포넌트 설명도 "Underline is always present by default (not hover-only)"로 정정. 미퍼블리시(사용자 수동 예정).
29. ⚠️ **`Link`(`82:110`) Size=Large/Small의 fontSize가 둘 다 16px로 동일 — 2026-10-01 발견, 미수정**. 위 #28 작업 중 발견. 이름상 Large=Label/Medium(16px)·Small=Label/Small(14px)로 달라야 할 것 같은데 실제로는 두 variant 모두 16px. 오래전부터 그랬던 상태로 보이며 이번 밑줄 수정 범위 밖이라 손대지 않음 — 의도적인지 버그인지 **미확인**.
30. **`Segment`/`Segmented`의 Hover·Disabled는 원본 디자인에 없어 에이전트가 기존 패턴으로 추정 구현함 — 육안 확인 필요**(2026-10-01). Hover: Selected=True는 보더 `Border/brand`→`Blue/800`(Button Secondary Hover와 동일 로직), Selected=False는 텍스트 `Contents/Secondary`→`Contents/Primary`. Disabled: 색은 그대로 두고 컴포넌트 전체 opacity 0.4(Link/TextButton과 같은 패턴 — Button처럼 회색으로 바꾸는 패턴은 채택 안 함). 원본 레퍼런스가 없는 임의 판단이라 실사용 화면 조립 시점(또는 지금)에 스크린샷으로 재확인 권장.

**결정 로그** (사용자 승인·확정)

| 날짜                 | 결정                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-09-20           | Avatar는 사진형 제외, `Initial`/`Default` × 32/40 (사용자 요청으로 Initial 40 포함)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2026-09-20           | 아이콘 파편화는 핵심 7종 + Chip 아이콘 연결까지(고아 노드·MUI 잔여는 범위 밖)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2026-09-21           | **원자 갭을 P2 전에 먼저 채움**(방안 1). `Button/Basic`은 기존 세트 확장(`Shape` + 아이콘 슬롯). 원본에 없는 상태는 만들지 않되 Textarea만 Input/Field를 미러링                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2026-09-21           | Toggle Off 트랙은 원본 정의값(`Border/strong`)으로 — 새 토큰 불필요                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2026-09-21           | P2 순서 P2-1 Table → P2-2 폼/선택 → P2-3 Header/Detail → P2-4 나머지. Table은 **셀 키트 방식(A)**, 표는 컴포넌트가 아니라 프레임 조립 패턴. 프로젝트 화면은 표가 아니라 카드 → P2-4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2026-09-21           | Chip 정리는 4종 전체, `Choice Token`은 실사용 2색만, `Radio List`/`Tab Group`은 미리 만들어 두고 `Show` 옵션으로 켜는 방식                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2026-09-21           | `Status`는 필요한 화면이 나올 때 재제작. 라벨 칩 색은 사용자 선택이라 색 맞춤 불필요                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| (조사)               | Header: 31개 인스턴스 nav 간격 전부 64로 동일 → "인스턴스별 오버라이드" 가설은 **틀림**. 실제 문제는 루트 간격 665·Left 120 직접 입력값과 `right_gnb_item` 내부 그룹(자동 레이아웃 아님) → P2-3에서 자동 레이아웃으로 재구성                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| (재조사, 2026-09-21) | 위 "`right_gnb_item`이 오토레이아웃 아님" 가설도 **틀림으로 정정** — 실제로는 정상 오토레이아웃(`gap:48px` 하드코딩)이었음                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2026-09-21           | P2-3 승인 4건: ① Header 루트 간격 665px은 새 토큰 대신 `space-between` 구조로 해소 ② Header 프로필 아바타는 **Photo variant 만들지 않음**(기존 "Avatar 사진형 제외" 결정 유지, 이미지 그대로 배치) ③ Header 그림자는 `elevation3`를 신규 DS 기존 Effect Style에 맞춤(결과: 완전 일치 확인) ④ `Detail Row`는 5개 값 타입(Chip/Meta·Date·RadioList·Field·Toggle) 전부 한 번에 제작, 향후 타입 추가가 쉽도록 `Type` variant를 단일 enum으로 설계                                                                                                                                                                                                                                                                                                                     |
| 2026-09-21           | `Accordion Head` 화살표는 원본의 CSS rotate 방식 대신 신규 DS `Icon/Arrow`의 Direction variant를 스왑하는 방식 채택(원본 회전값 실측: 펼침=Up, 접힘=Down)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2026-09-21           | Header 프로필은 Avatar 컴포넌트(Type=Default) 재사용으로 수정(placeholder 직접 제작은 재사용 원칙 위반이라 사용자 지적) — 완료                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2026-09-21           | Detail Row 확장 Stage A(ReadonlyText·ChangeIconSingle·UserPill·Dropdown 4종 추가)+Stage B(`LinkedChipList`·`AlarmComposite` 별도 molecule) 승인 — 원본 계약상세 "기본정보"(`4345:48706`)·자문상세 유저정보(`4345:52272`) 재조사 기반. Figma 소스가 없는 자문 "기타 정보"·외부변호사/회람인은 승인된 기존 타입을 조합해 원자 단위로 구성 가능하다고 승인(일반 원칙: 원본 없으면 원자소스부터, 매번 사용자 승인 하에)                                                                                                                                                                                                                                                                                                                                               |
| 2026-09-21           | `Chip/Meta` 중복 텍스트 버그 발견 즉시 수정 승인 — 완료(열린 항목 #17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2026-09-21           | `Rich Text Editor`는 서드파티 에디터 대체 예정이라 픽셀 단위 소스·아이콘 벡터 재현 불필요, 시안용 UI 틀만 필요. 첫 시도(1단 9아이콘)가 원본과 구조 자체가 달라 재작업 → 2번째 시도도 확성기/종/차트 등 엉뚱한 아이콘으로 재차 반려 → 3번째로 사용자가 실사용 스크린샷 3장 제공, **Compact/Full 2-density variant**로 재구성하고 아이콘은 Documents/Edit/Copy/Close/More/Arrow 등 중립적인 것만 반복 사용하는 방식으로 승인. "진행상황" 타임라인+댓글 컴포넌트는 범위 밖으로 스킵(열린 항목 #18)                                                                                                                                                                                                                                                                   |
| 2026-09-22           | P2-3(Header/Detail Row/Accordion Head) 퍼블리시 완료 확인(사용자). P2-4 조사 결과 준비도 편차가 커서 **P2-4a(calendar/day·Button / Open·Popup_list)만 이번 배치로 제작**, 나머지(카드류·score_board 계열·contents_mainlist·RecentViewed_Item·Graph)는 P2-4b로 분리해 추가 조사 후 별도 승인                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2026-09-22           | 프로젝트 카드의 배지(계약/소송/자문/문서 건수)는 **기존 `Badge / Category`/`Badge / Count`(`4455:42`/`4455:34`) 마스터로 통일**하기로 결정 — P2-4b(카드류 제작) 착수 시 적용                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2026-10-01           | 작업 파일(`mp4KoPM2jqzU2N9yGVBSrf`)의 "수정" 버튼 조사에서 시작된 이슈 — Link는 네비게이션 전용(hover 밑줄), 액션 트리거(예: "수정")는 밑줄 없는 별도 컴포넌트가 필요하다고 **사용자 확정**. DS `Link`(`82:110`)를 복제해 `TextButton`(`326:1590`, 섹션 `82:111` 내부 Link 오른쪽) 신설 — Size(Large/Small)×State(Default/Hover/Disabled) 6 variant, Text/Show Icon/Icon 프로퍼티 동일. Hover는 밑줄 대신 텍스트색만 `Blue/800`로 진해짐(Button `Kind=Secondary` Hover와 동일 토큰 재사용, 신규 토큰 없음). Disabled는 Link와 동일하게 Small/Large 모두 `Brand/Primary`+opacity 0.4 통일. **미퍼블리시**(사용자 수동 예정). 코드 측 `src/components/ui/TextButton`도 동일 스펙으로 구현·테스트 통과. 부수적으로 Link 자체의 설명/구현 불일치 발견(열린 항목 #28). |
| 2026-10-01           | 위 TextButton 작업 중 발견한 `Link` 밑줄 불일치를 **사용자가 "hover 한정이 아니라 기본부터 항상 밑줄"로 정정** — `Link`(`82:110`) 6 variant 전부에 `textDecoration: UNDERLINE` 적용해 수정 완료(열린 항목 #28 해소). 작업 중 Large/Small fontSize가 둘 다 16px로 동일한 것도 추가 발견(열린 항목 #29, 미해결).                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2026-10-01           | 작업 파일 node `4817:58058`("계약/자문" 2지선다 프레임) 조사 결과 대응 컴포넌트 없음 확인. **사용자 확정: 단일선택, 옵션 2~3개 가변**(예: 계약/자문/소송) 세그먼트 컨트롤. Figma 컴포넌트 세트는 텍스트 기본값이 세트당 하나뿐이라 기존 Radio List/Tab Group/Popup_list와 동일한 "원자+Show 불리언 조립" 패턴 적용 — 원자 `Segment`(`334:1584`, Selected×State 6 variant) + 조립체 `Segmented`(`334:1585`, Segment 인스턴스 3개 + 3번째 `Show` boolean), Tab 섹션(`83:78`)에 배치. Hover/Disabled는 원본에 디자인이 없어 기존 Button/Link/TextButton 패턴을 참고해 에이전트가 판단(열린 항목 #30, 육안 재확인 권장). **미퍼블리시**. 코드 측 `SegmentedControl`은 미착수(사용자 확인 후 진행 예정).                                                               |
| 2026-10-01           | **`TextButton`·`Segment`/`Segmented` 전부 사용자가 퍼블리시 완료.** 코드 측도 이어서 반영: `src/components/ui/TextButton`, `src/components/ui/Segmented`(options 배열 기반, Figma의 Show boolean 슬롯 방식 대신 2~3개 가변 배열로 설계) 둘 다 4파일 구조(.tsx/.module.css/.stories.tsx/.test.tsx/index.ts)로 구현, 전체 테스트/타입체크/빌드/Storybook 빌드 통과.                                                                                                                                                                                                                                                                                                                                                                                                 |

**Figma API 기술 메모 (모든 작업 공통)**

1. 크기를 지정한 뒤(`resize`) HUG를 다시 설정할 것 — `resize()`가 크기 모드를 FIXED로 되돌림.
2. 인스턴스 내부 레이어에는 프로퍼티 연결·자식 추가 불가 → 텍스트 연결은 인스턴스 밖 레이어만, 늘어나는 목록은 "미리 만들어 두고 Show 옵션".
3. 컴포넌트 세트의 텍스트 프로퍼티는 세트 전체에서 기본값 하나 — 종류별 샘플 문구 불가. 텍스트 레이어 이름은 내용에 맞춰 자동 변경될 수 있어 이름으로 찾지 말 것.
4. 실패한 `use_figma` 호출은 **전체가 롤백**됨(부분 적용 없음). 다시 실행하면 됨.
5. 숨긴 인스턴스의 자식은 `figma.skipInvisibleInstanceChildren = false`를 켜야 접근 가능.
6. 교체(INSTANCE_SWAP) 슬롯의 아이콘 색은 **프로퍼티 연결 이후에** 오버라이드해야 유지됨(교체 후에도 유지 확인).
7. 세트 안 variant를 `clone()`하면 세트 밖(페이지)에 생김 → `set.appendChild()`로 넣어야 함. 컴포넌트를 다른 컴포넌트 안에 넣을 수 없음(인스턴스로).
8. `strokesIncludedInLayout`이 켜져 있으면 테두리 2px이 hug 크기에 더해짐. 원본 방식과 맞는지 컴포넌트별로 확인(Button은 끔, Chip·Input은 원본과 같아 유지).
9. 원본 SVG를 옮길 땐 경로(`d`) 해시로 원본과 대조해 옮겨 적기 오류를 검증. 색은 SVG hex와 변수 해석값이 일치할 때만 바인딩.
10. 임시 프레임/노드를 만들면 반드시 제거하고, 마지막에 페이지 최상위 잔여 노드(섹션 외)를 점검.

## 지금까지 만든 것 (Figma node-id)

**신규 파일** "법틀 디자인시스템 v1" — fileKey `jRZzfr9vGsyGKCvT5HS0Gp` — https://www.figma.com/design/jRZzfr9vGsyGKCvT5HS0Gp

- 페이지: `01 Tokens` = `0:1` / `02 Components` = `1:2`(컴포넌트 전부 여기 — 위 "섹션 지도" 참조) / `04 QA Sandbox` = `1:3`(빈 페이지)
- `01 Tokens` 내 섹션: Primitive `1:4` → Semantic `1:5` → Typography `1:6` → Spacing & Radius `1:7` → Elevation `1:8` → Layout `1:9`
- 변수 컬렉션: Color/Primitive `VariableCollectionId:2:2`(40) / Color/Semantic `VariableCollectionId:3:2`(33, 전부 Primitive alias) / Spacing `VariableCollectionId:3:36`(18) / Radius `VariableCollectionId:3:55`(7, 제안 단계 명시) / Layout `VariableCollectionId:3:63`(4변수×4모드 1920/1600/1440/1200, 가설값 명시)
- Typography Text Style 15개, Elevation Effect Style 8개 — 전부 생성 확인(`get_styles`로 재조회 가능)
- 샘플 바인딩 QA: `1:4`(Semantic 섹션) 내 사각형 `3:91`("QA Binding Sample — Brand/Primary")에 `Color/Semantic/Brand/Primary` 바인딩, `get_variable_defs`로 `#2563eb` resolve 확인함
- **작업 파일 구독 확인**: `mp4KoPM2jqzU2N9yGVBSrf`에서 "법틀 디자인시스템 v1" 구독됨(`get_libraries`로 재확인). Color(`Brand/Primary`)/Typography(`Heading/Large`)/Elevation(`elevation1`) 3종 전부 작업 파일에서 임포트→바인딩→`get_variable_defs` resolve 성공. 색상 피커 UI 육안 노출 여부만 미확인(API로는 검증 불가) — P1 작업 중 문제 생기면 바로 확인할 것.

**스펙과 다르게 처리된 부분**

- `State/ErrorTransparent`/`State/SuccessTransparent`: Figma 변수가 alias+opacity 조합을 지원하지 않아 계산된 hex(`#ef44441a`, `#16a34a1a`)를 직접 값으로 사용 (로컬 `tokens/colors.json`과 동일 처리)
- Typography font-family: "Apple SD Gothic Neo" 단일 family로 굵기별 style이 이 실행 환경에서 안 잡혀서 `AppleSDGothicNeoR00/SB00/B00` 계열로 바인딩함 — 실제 macOS 폰트 설치된 Figma 데스크톱에서 열어 표시 확인 필요

## P1 진행상황

> 이 섹션의 "퍼블리시는 아직/안 함" 표기는 작성 당시 기준이다. 현재는 P2-2까지 퍼블리시 완료(위 "현재 상태 한눈에" 참조).

- [x] **Icon 핵심 세트 통합 완료** — 신규 `Icon` 컴포넌트셋(fileKey `jRZzfr9vGsyGKCvT5HS0Gp`, 섹션 `13:51`, 컴포넌트셋 `13:50`), property `Name`, 44 variant, 오류 없음. 8×6 그리드 배치.
  - ⚠️ **원래 가정 정정**: `Icon / Bagic`은 원본 파일 로컬 컴포넌트가 아니라 외부 **remote 라이브러리**였음(로컬엔 인스턴스만 존재). 정본은 `Icon / Basic`(원본 리뷰보드 node `3353:27091`, 44 variant).
  - `Icon / Basic` 자체가 `Upload`×2, `Menu`×2 이름 중복 오류 상태였음 → 신규 세트에서 `Upload 2`/`Menu 2`로 구분 명명해 해결(각 컴포넌트 description에 근거 기록).
  - 벡터 재현 방법: 원본 `exportAsync(SVG_STRING)` → 신규 파일 `createNodeFromSvg` → `createComponentFromNode`. Path/색상까지 원본과 100% 일치 확인(예: Error 아이콘 `#0EA5E9` 유지).
  - 원본 파일은 읽기만 함, 수정 없음. 퍼블리시는 아직 안 함(사용자 수동 예정, P0와 동일 절차).
- [x] **Icon 파편화 세트 핵심 7종 통합 완료** — 신규 `Icon` 섹션(`13:51`)에 추가, 8개 세트 전부 프로퍼티 오류 없음. 원본은 읽기만 함.
  - `Icon / Notification`(`67:44`, State Empty/Notified 2) · `Icon / Star`(`67:51`, State Default/Active 2) · `Icon / Emphasize`(`67:61`, Type Essential/Dot/Bullet 3) · `Icon / Sort`(`67:77`, 3, 원본 이름 "Icon"이라 충돌 회피로 개명) · `Icon / Arrow`(`68:68`, Direction×Size 12, 원본의 불규칙 조합 그대로 — 없는 조합 신설 안 함) · `Icon / Menu_S`(`69:86`, State×Menu 12) · `Icon / Menu_M`(`72:50`, Menu 14).
  - 신규 `Icon` 세트(44종)와 중복 없음 확인(신규 Star=회색 외곽선 하나, 원본 Star=회색+파란 채움 2상태 / 신규 Noti=회색 종, 원본 Notification=노란 종+빨간 배지 / 신규 Menu=문서, Menu 2=햄버거).
  - variant 이름 정정(원본 이름은 각 component description에 기록): `renewal`→`Menu=Renewal`, `Clame`→`Claim`, `Advertisig`→`Advertising`, `theLegalTeam`→`TheLegalTeam`, `default`→`Default`, `bullet`→`Bullet`. ⚠️ 코드/기존 인스턴스가 원본 이름을 참조한다면 매핑 필요.
  - 색상: **원본이 변수에 바인딩한 색은 같은 변수로 연결**(SVG hex와 변수 해석값이 일치할 때만 바인딩하는 안전장치). Menu_S: `Brand/Primary`(Basic)/`Contents/Tertiary`(Add)/`White`, Menu_M: `Contents/Primary`, Notification: `Border/divider`·`Brand/Tertiary`·`State/Error`·`White`, Star: `Border/default`·`Brand/Secondary`, Emphasize: `Brand/Primary`·`State/Info`·`State/Error`, Sort·Arrow: `Contents/Tertiary`. (⚠️ 앞서 만든 `Icon` 44종은 원본 SVG hex 그대로라 바인딩 안 된 상태 — 이번 7종과 처리 방식이 다름, 필요 시 일괄 바인딩 검토.)
  - 원본 불일치 그대로 유지: Menu_M 14개 중 `TheLegalTeam`·`Auto`만 `Brand/Primary`(파랑), 나머지 12개는 `Contents/Primary`. `Notification/Notified`의 "30" 배지는 텍스트가 아니라 아웃라인 벡터(숫자 편집 불가, description에 명시).
  - Menu_M은 14개 SVG를 옮겨 적는 방식이라 경로 데이터 해시를 원본과 대조해 14개 전부 일치 확인 후 생성.
- [x] **Chip 아이콘 → Icon 인스턴스 연결 완료** — `Chip / Meta`(`20:80`)의 아이콘 프레임 8종을 Icon 인스턴스로 교체: User 계열 4종(UserBorder/OnBg/Bg/Blue)→`Icon` 세트 `Person`, Seal→`Menu_S` Stamp, Advisory/Litigation→`Menu_S` 각각, `file`→`Icon` 세트 `Attachment`, Contract→`Menu_S` Contract. 벡터 경로 데이터·위치/크기 정확히 일치 확인 후 교체, variant 크기·화면 전후 동일.
  - ⚠️ **원래 가정 정정**: 위 Chip 항목의 "Brand/Contract 등 매핑 완료"는 텍스트/배경/테두리 얘기였고, **아이콘 벡터 색은 하드코딩 hex였음**(#737373 등). 교체하면서 인스턴스 벡터 fill을 `Contents/Tertiary`/`Contents/Secondary`/`Brand/Primary`/`Brand/Contract`/`Brand/Advisory`/`Brand/Litigation`에 바인딩(색 일치 확인 후)해 토큰화됨.
  - 남은 것: 각 variant의 닫기(×) 아이콘(16px 회색 원 + 8px 흰 ×)은 Icon 세트에 대응 글리프가 없어(`Close`는 원 없는 ×) 개별 벡터로 유지. `Chip_s`·`Tag / File`은 이번에 점검하지 않음(인스턴스 밖 벡터 조회에서는 Chip / Meta 이외 항목이 나오지 않았음).
- [ ] **Icon 파편화 — 미처리 잔여(범위 밖으로 남김, P2 진행 중 필요 시 처리)**:
  - `icon_filetype`(`9:2639`), `icon_menu/Variant13`(`1229:14146`)·`Variant14`(`1229:14024`) — 부모가 COMPONENT_SET 아닌 FRAME인 고아 노드 확인됨(구조 파손 사실로 확인)
  - 리뷰보드의 세트 밖 독립 컴포넌트 `Icon / Basic/file-merge-cancel`(`1552:13772`), `Icon / Basic/file-merge`(`1552:13765`)
  - MUI 클래스명 개별 컴포넌트 9개: `RefreshRoundedIcon`(`1962:11844`) 1개만 위치 확인, 나머지 8개 미탐색
  - `icon_24`/`Icon_24`: 위치 미특정
- [x] **Chip/Label 정리 완료** — 신규 `Chip` 섹션(`17:2`), `Chip / Label`(컴포넌트셋 `18:12`, 5 variant: item01~04+itemGray) / `Chip / Meta`(컴포넌트셋 `20:80`, 9 variant — 이전 조사 "8종"은 부정확했음, 실제 9종) / `Chip_s`(`21:2`) / `Tag / File`(`21:4`).
  - ⚠️ **원래 가정 정정**: "5번째 variant가 레거시 중복 하드코딩(#ef4444)"이라는 이전 조사는 틀렸음 — 재조회 결과 5번째는 정상 `itemGray`(#f9fafb, Variable 바인딩)였고 원본 `Chip/Label` 5종 전부 이미 토큰 준수 상태. 전량 그대로 이관함(불필요한 variant 제거 안 함).
  - hex→변수 매핑 전부 완료(Yellow/100, Red/300, Sky/100, Green/50, Gray/50/100, Surface/Container, Border/default, Contents/Secondary, Brand/Primary·Contract·Advisory·Litigation). `Brand/Contract`·`Advisory`·`Litigation` 값이 각 Chip 색상과 정확히 1:1 일치 확인.
  - 아이콘은 Icon 작업과 동일한 SVG export→import 방식으로 재현(단, 재사용 가능한 마스터 인스턴스가 아니라 개별 벡터로 삽입됨 — 추후 Icon 라이브러리와 정식 연결 필요).
  - 폰트: Icon 때와 동일하게 `AppleSDGothicNeoR00/M00/B00` 대체 사용, 실제 데스크톱에서 확인 필요.
  - 원본은 읽기만 함, 퍼블리시는 안 함(사용자 수동 예정).
- [x] **Signal Badge + Status 완료** — 신규 "Signal" 섹션(`29:33`).
  - `Signal Badge`(`28:41`, Red/Yellow/Green/Gray 4 variant) — 흰/투명 배경(`fills:[]`) + 컬러 보더 + 컬러 텍스트 아웃라인 스타일. Gray는 `Border/divider`+`Contents/Secondary`로 바인딩(현재 흐린 색이라 outline에서 거의 안 보이던 `State/Inherit`에서 교체).
  - `Status`(`29:32`) — ⚠️ **중요 정정 히스토리**: 원래 참고했던 고아 노드(어느 화면에도 안 쓰이던 실험 버전) 기반으로 "반려=RED, 완료류=GREEN, 나머지=YELLOW" 고정 매핑을 만들었으나, 실사용 화면(계약 리스트/메인홈 대시보드) 조사 결과 실제 제품은 상태 색 구분이 전혀 없었고(전부 동일 색), 사용자도 "업무 상태로 색 구분해서 쓸 계획 없음"이라고 확정. **최종 구조는 `Label`(10종 텍스트)×`Signal`(None/Red/Yellow/Green) 완전 독립 프로퍼티, 40 variant.** 기본값(Signal=None)은 `Border/divider`+`Contents/Secondary` 무채색(실사용 화면과 동일), 색 강조가 필요한 화면에서만 Signal을 임의로 켜서 사용(텍스트 의미와 무관하게 조합 가능).
  - boundVariables 스팟체크 통과(반려+None, 반려+Green, 완료+None, 초안+Yellow, 검토요청+Red 전부 정상), 배경 전부 투명 확인.
  - 원본 파일은 읽기만 함(초기 조사 단계 제외 후속 수정은 신규 파일만 작업), 퍼블리시는 안 함.
- [x] **Checkbox 완료** — 신규 "Checkbox" 섹션(`31:24`), 컴포넌트셋(`31:23`, Selected×State 6 variant). 원본의 중복 두 계통(`Check` 4종/Hover 없음 vs `Checkbox` 12종/내부 중복버그) 중 `Checkbox`(아이콘 전용 16×16 패밀리)를 정본 채택, 중복 제거해 6종으로 정리. 체크마크는 Icon 작업과 동일한 SVG export/import 방식. Hover/Selected-Hover 색상은 대응 시맨틱 토큰이 없어 Primitive(`Blue/800` 등)에 직결 — 추후 `Border/hover`, `Brand/PrimaryHover` 같은 시맨틱 토큰 신설 검토 필요(이번 범위 밖으로 판단, 생성 안 함).
- [x] **Button, Input 완료** (사용자 확인, 신규 파일 `02 Components` 조회로 존재 확인) — `Button` 섹션(`44:66`): `Button/Basic`(`44:65`, 30 variant) / `Input` 섹션(`45:63`): `Input/Field`(`45:62`, 18) · `Input/Search`(`46:65`, 15) · `Input/Dropdown`(`47:70`, 12) · `Input/Date`(`47:119`, 12). 세부 작업 내역은 이전 세션에서 이 문서에 기록되지 않았음.
- [x] **Avatar 완료** — 신규 `Avatar` 섹션(`62:43`), 컴포넌트셋(`62:42`), `Type`(Initial/Default) × `Size`(32/40) = 4 variant. Initial은 `Initial` TEXT 프로퍼티(기본 "박")로 글자 노출.
  - ⚠️ **원래 가정 정정**: 아래 감사표의 "Avatar ❌ 미존재"는 라이브러리 컴포넌트가 없다는 뜻이었고, 실제로는 원본에 두 형태가 화면에 흩어져 사용 중이었음 — ① 계약 리스트의 이니셜 원형 `Frame 30`(32×32, 리뷰보드 20개 전부 동일값) ② 헤더 GNB `profile/Avatar`(40×40 벡터, 전 화면 공통). 사진형은 조사한 3개 페이지(법틀클라우드 2.9 / 진행중 / 리뷰보드)에서 사용처 없어 제외(사용자 확인). 법틀AI 1·2차/draft/Page 3은 미조사.
  - 바인딩: Initial 배경 `Brand/Primary`(Blue/600 alias 확인, 원본은 Blue/600 직결), 글자 `White` + Text Style `Label/BSmall`(원본 `text-sm/bold`), radius `Radius/Full`, Default 글리프 `Blue/200`. 시맨틱 토큰이 없는 White/Blue/200은 Primitive 직결(Checkbox와 동일 처리). 검증(변수/스타일/프로퍼티 참조/placeholder 잔존 없음) 통과.
  - 글리프는 원본 헤더 벡터의 SVG export→`createNodeFromSvg` 방식으로 재현(Icon `Person`으로 대체하지 않음 — 원본 형태 보존).
  - Initial 40은 원본에 없는 대칭용 variant(사용자 요청). 글자 스타일은 32와 동일하게 14px 유지.
  - 계약상세의 `user`(16px 아이콘+이름+부서)는 Avatar가 아닌 사용자 정보 블록 → P2 Molecule 대상.
  - 원본은 읽기만 함, 퍼블리시는 안 함(사용자 수동 예정).
- ✅ **P1 컴포넌트 목록 전부 완료** + Icon 핵심 7종 통합·Chip 아이콘 연결 완료(위 참조). 남은 Icon 잔여(고아 노드/MUI 9개/미특정 2개)는 P3 이후 필요할 때 처리(열린 항목 #6). 퍼블리시 완료.

## P1 갭 감사 (2026-09-20, 리뷰보드 실사용 집계 — 인스턴스 5,001개 / 고유 컴포넌트 158종)

> 집계 대상: 리뷰보드 페이지의 인스턴스만(컴포넌트 없이 직접 그린 프레임은 미집계). 횟수는 인스턴스 수이지 화면 수가 아님. `[remote]`는 외부 라이브러리 컴포넌트.
> **아래 표의 "신규 파일" 열은 감사 시점(2026-09-20) 기준이다. 해소 결과: Button 확장·`Button/Icon`·`Link`·`Radio`·`Toggle`·`Textarea`·`Tab`·칩 닫기 → P1.5, `Pagenation`·`Form_Small`/`Form List`·`Input / Check`·`Radiobutton List`·`Tabs_Group`·`Choice token` → P2-1/P2-2에서 완료. 남은 것: `Popup_list`, `calendar/day`, `Button / Open`, `Button_XL`(P2-4/P3).**

**P1에서 만든 것과 실사용의 차이 (감사 시점 기준 — 신규 파일에 없음)**

| 분류      | 원본 실사용                                                                                                                                       | 신규 파일                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Button    | `Button / Bagic` 124(remote)+로컬 `Button / Basic/…` 78 — 로컬은 **아이콘 위치 Left/Right** 변형 포함                                             | `Button/Basic` 30 variant(Kind×Size×State), **아이콘 프로퍼티 없음** |
| Button    | `Button / Rounded` 171(Nagative·Primary·secondary Medium, Small icon_button, RoundButton)                                                         | 없음                                                                 |
| Button    | `Button / Icon` 96(add·reset), `Button_XL` 10 · `Button_L` 2 · `Button_L_Rounded` 7, `Button / Open` 8(Open/more/Close)                           | 없음                                                                 |
| 입력·선택 | `Link` 283(Large/Small), `Radiobutton` 115 + `Radiobutton List` 32, `Toggle` 21, `Textarea` 30                                                    | 없음                                                                 |
| 탭·기타   | `Tabs` 149 + `Tabs_S` 29 + `Tabs_Group` 16, `Popup_list` 69, `Choice token` 20, `Input / Check` 32, `Pagenation` 18, `Form_Small`/`Form List` 154 | 없음                                                                 |
| Chip      | 칩 닫기 × `token_text/Chips/Icon/Property 36` **329회**(remote)                                                                                   | 각 Chip/Meta variant 안에 개별 벡터로만 존재                         |
| Chip/Meta | 실사용 variant에 `Counsel` 24, `Attachment` 43                                                                                                    | 신규는 `Advisory`/`file` — 같은 것인지 **미확인**                    |
| Date      | `calendar/day` 245                                                                                                                                | 없음(P2 Date Picker 분자)                                            |

**아이콘**

- `Icon / Bagic`·`Icon / Basic` 실사용 18종(Add, OpenNew, Search, Attachment, Person, Calendar, Info, Send, Business, Change, Copy, Cloud_upload, Edit, Close, Complete, user-line, Contract, Menu)은 신규 44종 세트에 **모두 존재**. Arrow/Menu_S/Menu_M/Emphasize도 실사용 variant 커버됨.
- 미커버: `icon_menu` 98회(icon_contract/counsel/lawsuit/doc/_add/stamp/dispute — Menu_S와 같은 글리프인지 **미확인**), MUI 이름 단독 아이콘 약 130회(ArrowDropDown 23, KeyboardArrow 21, icon_direction back/front 18, StarOutline 16, icon_24 Settings/Add/MoreHoriz 15, InfoRounded 10, LockRounded 5, icon_warnning 5, AccessTime 4, SpaceDashboard 4, DonutSmall 2, SaveAlt 2 등). 상당수는 Basic 아이콘과 의미 중복 — 대체 매핑 가능 여부 확인 필요. 대응 글리프가 없어 보이는 것: ArrowDropDown, icon_direction, icon_warnning, DonutSmall, SaveAlt.

## P1.5 원자 갭 채우기 결과 (2026-09-21, 위 감사 기준 · 사용자 승인 방안 1)

원본은 읽기만 함. 이번 배치의 신규/변경 세트 10개 전부 검증 통과: 변수 미바인딩 색 0, 임시 노드 잔존 0, 프로퍼티 정의 오류 0.

| 컴포넌트                    | node-id                         | 내용                                                                                                                                                                                                                             |
| --------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Button/Basic` **확장**     | `44:65`                         | 30→**60 variant**: `Shape`(Default/Pill) 추가(원본 `Button / Rounded`는 r=24/9999가 40·30px 높이에서 둘 다 완전 원형이라 `Radius/Full` Pill로 통합) + 좌/우 아이콘 슬롯(`Show Icon Left/Right` BOOLEAN + `Icon Left/Right` 교체) |
| `Button/Icon`               | `79:62`                         | 아이콘 전용 40×32 알약, State 3종(Solid Small Pill 기반), `Icon` 교체 프로퍼티. 원본은 Small만 사용, 원본에 없는 State는 Basic 규칙을 미러링                                                                                     |
| `Radio`                     | `82:74` (섹션 `82:75`)          | Selected(False/True)×State(Default/Hover/Disabled)=6, Checkbox와 같은 축. 원본 6상태와 색 1:1                                                                                                                                    |
| `Toggle`                    | `82:84` (섹션 `82:85`)          | State(On/Off)×Disabled(False/True)=4. Off 트랙은 원본 **정의값** `#A3A3A3`=`Border/strong`(원본 일부 인스턴스의 `#CBD5E1`은 오버라이드였음 → 토큰 신설 불필요). 라벨은 포함 안 함                                                |
| `Link`                      | `82:110` (섹션 `82:111`)        | Size(Large/Small)×State(Default/Hover 밑줄/Disabled 40%)=6 + `Text`, `Show Icon`/`Icon`(기본 Copy)                                                                                                                               |
| `Input/Textarea`            | `82:135` (Input 섹션 `45:63`)   | Input/Field Medium 복제 → 300×100 상단 정렬, State 6(Default/Hover/Focus/Error/Success/Disabled). 원본 `Active`→`Focus`로 개명                                                                                                   |
| `Tab/Pill`, `Tab/Underline` | `83:77`, `84:63` (섹션 `83:78`) | 원본 `Tabs`의 State축에 섞인 스타일/선택을 `Style`(Outline/Fill/White)×`Selected`×`Size`(S/L) 10개로 분리, `Tab/Underline`=원본 `Tabs_S` 4상태                                                                                   |
| `Icon / Close Circle`       | `85:47` (Icon 섹션)             | 칩 닫기 ×(329회) 컴포넌트화, `Chip / Meta` 9개 variant를 인스턴스로 교체(경로 일치 검증)                                                                                                                                         |
| `Icon / Menu_S` +1          | `69:86`                         | `Menu=Dispute`(Basic) 추가 — 원본 `icon_menu/icon_dispute`(LNB 분쟁, 36회), SVG 경로 해시 대조 후 생성                                                                                                                           |

**결정·발견 사항**

- ⚠️ **P1 Button 버그 수정**: `strokesIncludedInLayout`이 켜져 있어 같은 라벨인데 테두리 있는 종류(Secondary·Solid)가 Primary보다 2px 넓었음(원본은 폭 동일). Basic 60개 + Icon 3개 모두 끄고 검증(Medium 79 / Small 59로 통일). **P1 다른 컴포넌트(Input 등)에도 같은 설정이 있는지는 미점검.**
- 아이콘 슬롯 색: 슬롯을 숨긴 채로는 자식 접근이 안 되고(`figma.skipInvisibleInstanceChildren=false` 필요), **교체 프로퍼티 연결 이후에 색 오버라이드를 적용해야** 유지됨(연결 시 초기화). 교체(swap) 후에도 색 유지 확인. 이후 작업에도 이 순서 적용.
- Small 버튼은 24px 아이콘이 들어가도록 상하 패딩을 `Spacing/4`로 조정(높이 32 고정이라 크기 불변).
- Tab/Pill 높이가 원본보다 큼(S 38 vs 원본 35, L 46 vs 40): 신규와 원본의 텍스트 스타일은 동일(`Paragraph/Medium` 줄높이 22)한데 원본 Tabs 텍스트는 줄높이를 19로 직접 덮어쓴 상태였음. 스타일 토큰을 따르는 쪽을 택함(P5 화면 재배치 때 반영).
- Link Disabled: 원본은 Large=`Blue/300`@40%, Small=`Brand/Primary`@40%로 불일치 → `Brand/Primary`@40%로 통일.
- Radio/Toggle Disabled 텍스트·점은 원본과 같이 `Gray/400` 50% 불투명도.

**아이콘 매핑 결과 (경로 데이터 해시 정확 일치 — 신규 아이콘 불필요)**

- `icon_menu`: contract/contract_add→`Menu_S` Contract Basic/Add, counsel/counsel_add→Advisory Basic/Add, lawsuit→Litigation, doc→Documents, stamp→Stamp (dispute는 위에서 추가).
- MUI 이름: AccessTimeRounded→`Time`, StarOutlineRounded→`Star`(Default), KeyboardArrow Down/Right/Left→`Arrow` Small, ArrowDropdown→`Arrow` Down Xs, AddRounded→`Add`, SettingsRounded→`Settings`, EventRounded→`Calendar`, MoreHorizSharp→`More`, SpaceDashboardRounded→`Dashboard`, DonutSmallRounded→`Chart`, SaveAltRounded→`Download`, CloseRounded→`Close`, InfoRounded→`Info`.
- 정확 일치 아님(근사/미확인): `icon_direction` back/Front(캘린더 이전/다음 ‹ ›, 20px로 축소된 인스턴스 → `Arrow` Medium Left/Right로 보이나 크기 차이), `LockRoundedIcon`·`SearchRoundedIcon`(축소/확대 인스턴스 추정, 신규 `Lock`/`Search`와 같은 글리프인지 미확인), `KeyboardArrowUp`(1회, Arrow Up Small 근사), `Icon / Basic / Check`(신규 `Icon / Check`로 추정).
- **미처리(P3 Modal에서)**: `icon_warnning`(40px 주황 `#FB923C` 경고 삼각형, 다운로드 팝업에서 사용 — 대응 토큰 없음, 모달 상태 아이콘과 함께 처리), `icon_button/Icon/Delete`(1회, 8×8), 고아 `icon_menu/Variant13~15`(1회씩).

**P2/P3로 넘긴 것 (원자가 아닌 조립 성격)**: `Radiobutton List`, `Tab Group`(Compact/Stretched), `Choice token`, `Pagenation`, `Popup_list`, `calendar/day`, `Form_Small`/`Form List`, `Button / Open`(더보기/자세히 보기, 회색 텍스트+화살표). `Button_XL`(320×64 LNB CTA)은 P3 Header+LNB. 그리고 `Chip / Meta` 실사용의 `Counsel`(24)·`Attachment`(43)와 신규 `Advisory`·`file`이 같은 것인지는 **여전히 미확인**.

퍼블리시: 사용자 완료(P2-1 보고 시점에 확인).

## P2-1 Table 키트 + Pagination 결과 (2026-09-21, 사용자 승인: 셀 키트 방식 A)

원본은 읽기만 함. 검증: 색·간격·패딩·반경 미바인딩 0, 임시 노드 0, 프로퍼티 오류 0. 새 섹션 `Table`(`91:160`, 페이지 `02 Components` x=0,y=2900).

**조사에서 정정된 사실**

- ⚠️ **프로젝트 화면은 표가 아니라 카드 그리드**(요약 카드 5개 + 프로젝트 카드: 별·제목·ID·라벨 칩·진행중/완료 수). Table 키트가 필요한 건 사실상 **계약 리스트**(및 체결계약함 등 다른 리스트류 — 미확인). 프로젝트 카드는 P2-4(카드류)로.
- 원본 계약 리스트 표는 **행이 없고 열 프레임**(각 열에 셀을 세로로 쌓음, 행 피치 64), 헤더는 자동 레이아웃 아닌 **그룹**. 구분선은 별도 Line(`#D4D4D4`=`Border/default`), 헤더 텍스트 14px Bold `#737373`.
- ⚠️ **P1 Status 컴포넌트(`29:32`, 40 variant)가 신규 파일 어디에도 없음** — 상태 문서에는 완료로 적혀 있었으나 전체 페이지 검색에서 발견되지 않음(원인 불명, Signal 섹션엔 `Signal Badge`만 있음). 재제작은 **화면에서 필요해질 때**로 결정(열린 항목 #1). 원본의 진행단계 칩은 Status의 무채색 아웃라인과 모양이 달라 Table에는 영향 없음.
- ⚠️ P1 `Chip / Label`은 패딩이 변수 바인딩 없이 직접 입력(p4/2)이고 글자 13px가 Text Style 없이 들어가 있었음("하드코딩 0건" 기준 미달) → **P2-2에서 Chip 4종 전체를 정리해 해소**.
- Header 조사(P2-3용): 로컬 `Header` 31개 인스턴스의 nav 간격은 전부 64로 동일 → **"인스턴스별 간격 오버라이드"는 사실 아님**. 실제 문제는 루트 간격 665px·Left 영역 120px이 변수 없는 직접 입력값, `right_gnb_item` 내부가 자동 레이아웃 아닌 그룹.
- Input/Chip/Signal Badge는 "테두리를 레이아웃에 포함"이 켜져 있으나 Input은 높이 고정이라 무관, Chip은 원본도 테두리 칩이 34/무테두리 32로 같은 방식 → 수정 불필요. Button만 원본과 달라서 수정했었음.

**만든 것**

| 컴포넌트            | node-id                                 | 내용                                                                                                                                                                                                                                                                    |
| ------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Chip / Stage`      | `90:69` (Chip 섹션 Selection UI 프레임) | Fill(Gray/100 + Brand/Primary 글자)/Outline(Brand/Primary 테두리). 원본 진행단계 칩·"승인요청" 알약. 승인요청 알약의 인디고 `#364AED`는 토큰에 없어 Brand/Primary로 매핑. 글자는 Label/Xsmall(12.8px, 원본 13px Bold)                                                   |
| `Table/Header Cell` | `91:133`                                | Sort(None/Default/Ascending/Descending, Icon/Sort 사용) + Label                                                                                                                                                                                                         |
| `Table/Cell`        | `91:159`                                | Type: Text·Meta(2줄)·Status·Title(제목+라벨 칩 행)·User(Avatar 32+이름)·Link·Check. 셀은 내용만 — 패딩·간격·구분선은 Row 몫. `Text` 프로퍼티 기본값은 세트 전체 하나("텍스트")                                                                                          |
| `Table/Row`         | `92:178`                                | State Default/Hover(Gray/50)/Selected(Blue/50) — **Hover/Selected 색은 원본에 없는 신규 값(기존 Primitive 사용)**. 1615폭, 열 폭 No18·진행단계122·제목FILL·계약상대124·기안자112·검토자112·금액91·ID88·링크60, 간격 16, 좌우 64, 최소높이 64, 하단 1px `Border/default` |
| `Table/Header Row`  | `92:179`                                | 같은 열 폭, 최소높이 32                                                                                                                                                                                                                                                 |
| 조립 예시 프레임    | `92:590`                                | 헤더 행 + 행 5개(**컴포넌트가 아님** — Figma는 인스턴스에 자식을 추가할 수 없어 표는 자동 레이아웃 프레임에 Header Row + Row 인스턴스를 나열해 쓰는 패턴)                                                                                                               |
| `Pagination/Item`   | `93:415`                                | Number(Selected False/True)/Prev/Next, 32×32, 선택 채움 Gray/200(원본 `#E4E4E7`, 정확 토큰 없음)                                                                                                                                                                        |
| `Pagination`        | `93:416`                                | 이전·1~5·…·115·다음, 352×32 (원본과 동일)                                                                                                                                                                                                                               |
| `Pagination/Bar`    | `93:437`                                | (선택) 요약 "41-50 of 100"(Show Summary, 원본 화면에 안 보여 기본 숨김) + Go to page 입력 + Go 링크 + 목록. 원본 Go 버튼의 주황 `#F47725`(토큰 없음)는 Link(Brand/Primary)로 매핑                                                                                       |

**리사이즈/hug 검증**: 예시 프레임 폭 1615→1200→1920에서 제목 열이 632→217→937로 흡수, 높이는 352 유지. 행 +1=416, -2=288(헤더 32 + 행 64×N).

**미해결/주의**: 정렬 아이콘 사용 예는 원본 계약 리스트에 없음(Sort 변형은 원본 Icon/Sort 세트 활용 목적). 체크박스 열은 원본 계약 리스트에 없음(Cell Type=Check는 계획 승인 범위로 포함). 퍼블리시: 사용자 완료.

## P2-2 폼·선택·탭 분자 + Chip 정리 결과 (2026-09-21, 사용자 승인)

원본은 읽기만 함. 검증: 신규 6개 세트 미바인딩(색·간격·반경·글자 스타일) 0, 프로퍼티 오류 0, 임시 노드 0. 사용자 결정: `Status`는 화면이 필요해질 때 재제작, Chip 정리는 4종 전체.

**Chip 4종 정리 (P1 "하드코딩 0건" 미달 해소)** — `Chip / Label`·`Chip / Meta`·`Chip_s`·`Tag / File`의 패딩·간격·반경을 Spacing/Radius 변수에 바인딩(값이 전부 기존 토큰과 정확히 일치), 글자에 Text Style 적용(Label/Meta 12.8→`Paragraph/Xsmall`, Meta 16→`Paragraph/Medium`, Chip_s·Tag 14→`Paragraph/Small`). `Chip / Label`의 세로 패딩 2px(대응 토큰 없음)는 `Spacing/0` + 고정 높이 21 + 중앙 정렬로 원본 크기 유지. 크기 변화: Chip/Label 32×21 유지, Chip/Meta 일부 +2px 폭(작은 카운트 글자 12→12.8), Tag/File 137×35→134×36. 남은 미바인딩 0. 새 `Chip / Stage`도 0.

| 컴포넌트         | node-id                                  | 내용                                                                                                                                                                                                                                                              |
| ---------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Form Field`     | `98:383` (섹션 `Form` `98:423`)          | Kind 5종(Field/Dropdown/Search/Date/Textarea) + `Label`. 300×65(Textarea 125) = 원본 `Form_Small`과 동일. 내부 입력은 Small(40px), 인스턴스에서 Text/State 편집 가능(노출 인스턴스)                                                                               |
| `Form List`      | `98:422`                                 | Vertical 300×227 / Horizontal 932×65 = 원본과 동일, 필드 3개                                                                                                                                                                                                      |
| `Checkbox/Label` | `98:448` (섹션 `Selection` `98:502`)     | Selected×State 6종, 61×19 = 원본 `Input / Check`                                                                                                                                                                                                                  |
| `Radio List`     | `98:501`                                 | Direction(Horizontal/Vertical), 옵션 6개 중 4~6은 `Show Option`으로 켬(원본도 3개를 숨겨 둠). 3→4→6 동작 확인                                                                                                                                                     |
| `Tab Group`      | `98:545` (Tab 섹션 `83:78`)              | Layout(Compact/Stretched), Tab/Underline 5개 중 4·5는 `Show Tab`. 비선택 탭은 하단 기준선 표시(원본은 인스턴스별 오버라이드). Stretched 646×39, 폭 900에서 5탭 균등 분할 확인                                                                                     |
| `Choice Token`   | `98:558` (Chip 섹션 Selection UI 프레임) | Color Red(`Red/300`)/Blue(`Blue/300`) + `Show Close`. 원본 7색 variant는 이름과 색이 안 맞고 절반이 토큰 밖 색이라 실사용 2색만 이관. 글자색 `Contents/Primary`(원본 `#202020`). 닫기 아이콘은 `Icon / Close Circle`을 21px로 축소해 원본보다 10px 넓음(75 vs 65) |

**기술 메모(이후 작업 공통)**: ① `resize()`는 크기 지정 모드(HUG)를 FIXED로 되돌리므로 크기 지정 후 HUG 설정. ② 인스턴스 안 레이어에는 프로퍼티 연결·자식 추가 불가 → 인스턴스 내부 텍스트 제외하고 연결, 가변 목록은 "미리 만들어 두고 Show 옵션" 방식. ③ 컴포넌트 세트의 텍스트 프로퍼티는 세트 전체에서 기본값 하나만 가짐(종류별 샘플 문구 불가). ④ 실패한 `use_figma` 호출은 전체가 롤백됨. ⑤ 숨긴 인스턴스 자식 접근은 `figma.skipInvisibleInstanceChildren = false` 필요.

퍼블리시: 사용자 완료. 다음: P2-3(`Header` 재구성, `Detail` 행 + `Accordion Head`).

## P2-3 Header 재구성 + Detail Row + Accordion Head 결과 (2026-09-21, 사용자 승인)

원본(`mp4KoPM2jqzU2N9yGVBSrf`)은 읽기만 함. 모든 생성은 신규 DS 파일 `02 Components`(`1:2`)에서만. 사용자 승인 4건(위 결정 로그 참조): 665px→space-between 구조, Avatar Photo variant 미지원 유지, elevation3를 DS 기존 스타일에 맞춤, Detail Row 5타입 전부 한 번에.

| 컴포넌트                  | node-id   | 내용                                                                                                                                                                                                                                                                                                                        |
| ------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Header` (섹션 `108:445`) | `108:446` | 단일 조립 프레임(variant 없음, Table 조립 예시와 동일 패턴). Left(로고 워드마크+GNB, gap 120→`Spacing/128` 근사)/Right(링크+알림+프로필, gap 48) 2그룹, 루트 `primaryAxisAlignItems: SPACE_BETWEEN`으로 665px 고정 gap 제거. 재사용: `Icon/Notification`(`67:34` State=Empty), `Icon/Arrow`(`68:58` Direction=Down·Size=Xs) |
| `Detail Row`              | `109:522` | COMPONENT_SET, `Type` variant 5종(Chip/Meta·Date·RadioList·Field·Toggle). 재사용: `Button/Icon`+`Chip/Meta`(`20:47`), `Input/Date`(`47:103`), `Radio List`(`98:449`), `Input/Field`(`45:43`), `Toggle`(`82:80`)                                                                                                             |
| `Accordion Head`          | `111:654` | COMPONENT 단일, `Open`(boolean, 기본 false)·`Show Meta`(boolean, 기본 true). 재사용: `Icon/Arrow`(Down/Up)                                                                                                                                                                                                                  |

**조사 중 정정/확인된 사실**: 계약정보(`4345:48507`) 섹션 하나에서 5개 값 타입(RadioButton·Toggle·Date·Field·Chip/Meta) 전부 실물 확인. 유저정보(`4345:48914`)는 원본에서 아코디언이 접힌 채 저장돼 있어 Body 내용 자체가 없었음(추가 조사 불필요로 판명). 화살표 회전 실측: 펼침(`-rotate-90`)=Up, 접힘(`rotate-90`)=Down, 기준 0°=Right. `elevation3`는 원본과 신규 DS가 완전히 동일한 값(근사 아님). `Button/Icon`(40×32 pill)은 알림 벨(40×40 필요)에 치수가 안 맞아 별도 wrapper로 처리.

**토큰 매핑**: `Brand/Primary`(#2563EB, 활성 밑줄) · `Contents/Primary`(#030712) · `Contents/Secondary`(#525252) · `Contents/Tertiary`(#737373) · `Border/default`(구분선) · `Surface/Container`(배경) · `Gray/100`(메타 뱃지 배경, Semantic에 대응 없어 Primitive 직결) · `Spacing/32`(패딩) · `Spacing/64`(GNB gap, 정확 일치) · `Spacing/48`(Right gap, 정확 일치) · `Radius/SM`(메타 뱃지) · `Radius/Full`(알림 pill). 근사 처리: Left gap 120→`Spacing/128`(+8px), 활성 밑줄 두께 4.87→`Spacing/4`(−0.87px), 밑줄 고정폭 80px는 토큰 대신 라벨 hug폭+`Spacing/8` 패딩으로 구조 변경(하드코딩 제거). 미이식: 로고 raster(→텍스트 워드마크 대체), 프로필 사진(→회색 원형 placeholder, Avatar 컴포넌트화 안 함).

**검증**: boundVariables 스팟체크 통과, 하드코딩 hex/px 0건(0값도 `Spacing/0`로 명시 바인딩). Header 1920→1600→1440 리사이즈에서 space-between 정상 확인(1200 이하는 콘텐츠 겹침, 위 열린 항목 #16 참고). 임시 노드 0건.

**열린 항목(위 "열린 항목" 리스트 #12~16 참고)**: `Accordion Head`의 `Open` boolean이 Figma API 반전 바인딩 미지원으로 완전 자동 동작 안 함(수동 보정 필요), 로고·프로필 이미지 미이식, gap/밑줄 두께 근사치, Header가 variant 컴포넌트가 아닌 단일 프레임, 1200px 이하 겹침.

퍼블리시: 사용자 완료(2026-09-22 확인).

## P2-3 확장 — Detail Row 9종 + Molecule 2종 + Rich Text Editor + Chip/Meta 버그수정 (2026-09-21)

사용자 피드백 3라운드(① Header 아바타 재사용 누락 ② Detail Row 타입 부족 ③ RichTextEditor 구조/아이콘 불일치)를 거쳐 확정. 원본은 읽기만 함.

**계기**: 사용자가 실제 프로덕션 스크린샷을 제공하면서 Detail Row가 계약상세 "계약정보" 섹션 하나만 보고 설계돼 타입이 부족하다고 지적. 재조사 결과 진짜 "기본정보" 섹션은 `4345:48412`가 아니라 `4345:48706`이었음(기존 문서 오기 정정).

**Detail Row 9종으로 확장** (`109:522`): 기존 5종(Chip/Meta·Date·RadioList·Field·Toggle)에 `ReadonlyText`(`117:500`)·`Dropdown`(`117:508`)·`ChangeIconSingle`(`119:2`)·`UserPill`(`119:35`) 추가. `Field`엔 `Show Lock` boolean 추가(공유링크 등 잠금 표시용). Change/Lock 아이콘은 Icon 세트에 이미 존재해 재사용. `Show Change`(`119:1`)·`Show Lock`(`120:0`) 프로퍼티는 Figma 제약상 컴포넌트셋 레벨에 정의됨.

**별도 Molecule 2종** (Detail Row Type이 아니라 독립 컴포넌트로 분리 — 내부 구조가 너무 달라서): `LinkedChipList`(`121:517`, 연관법무용 컬러테두리 칩 리스트+추가버튼) · `AlarmComposite`(`121:548`, +버튼+Field+Dropdown+Date+닫기 복합 행). 신규 섹션 "Detail Molecules"(`122:667`).

**Chip/Meta 버그 수정**: `Style=UserBorder/UserOnBg/UserBg` 3개 variant에 중복 텍스트 레이어("Text" 정본+"text" 잔재) 존재 → 잔재 삭제. 영향 인스턴스(UserPill/ChangeIconSingle) 재검증 완료, 다른 곳(Table/LinkedChipList) 영향 없음 확인.

**Rich Text Editor** (`02 Components` 신규 섹션 "Editor" `116:477`, 컴포넌트셋 `129:677`): 서드파티 에디터 라이브러리로 대체될 시안용 목업이라 아이콘 벡터 재현은 불필요하다는 전제로 진행했으나, 실제로는 화면마다 밀도가 달라 3차 재작업 끝에 `Density`(Full/Compact) variant로 분리:

- **Full**(`116:478`, 자문답변 대응): 작성자 이름/이메일 2줄 + 영문 메뉴(File/Edit/View/Insert/Format) + 2단 아이콘 툴바(18개, undo/redo·폰트크기·폰트·줄간격·정렬·리스트·이미지·표·B/I/U/S·글자색·하이라이트·링크/링크해제) — Documents/Edit/Copy/Close/More/Arrow 6종 아이콘만 반복 재사용.
- **Compact**(`129:642`, 계약요약 및 요청사항 대응): 작성자 메타 없이 헤더+본문+하단 미니 툴바(6아이콘+더보기)+저장 버튼.
- `Title`/`Show Author`는 셋 공유 프로퍼티로 유지.

**검증**: 신규/변경 전체 boundVariables 스팟체크 통과, 임시 노드 0건, 프로퍼티 오류 0건. Rich Text Editor는 `get_screenshot`으로 원본 스크린샷과 직접 대조(육안 확인, 구조·밀도 일치).

**미해결**: 위 "열린 항목" #17(수정완료로 표시)·#18(진행상황 컴포넌트 스킵)·#19(Compact undo/redo·indent/outdent 아이콘 중복)·#20(Density 화면 매핑은 추정) 참고.

퍼블리시: 사용자 완료(2026-09-22 확인).

## Rich Text Editor 마무리 — placeholder 레이어명 정리 (2026-09-21)

**계기**: 세션 재개 시 사용자가 "에디터 관련 작업 마무리가 안됐다"고 지적. 문서에는 완료로 기록돼 있었으나 실제 재조사(읽기 전용) 결과, 문서에 기록되지 않은 문제 발견 — 툴바 아이콘 인스턴스 레이어명에 `(placeholder)` 문구가 그대로 남아 있었음(구조·아이콘 선택·토큰 바인딩 자체는 문제없었음). 사용자에게 계획 보고 후 "이름 정리만"(방안 A) 승인받아 실행.

**정정**: 최초 조사 시 "Full 14 + Compact 7 = 21개"로 집계했으나, 실제 실행 시 열어보니 일부 아이콘 슬롯은 래퍼 프레임+버튼 인스턴스 두 레이어에 각각 placeholder가 있어(Line Spacing·Align·Numbered List·Bullet List·Table·Text Color·Highlight, 7쌍) **실제로는 Full 25 + Compact 7 = 32개**였음. 발견된 32개 전부 정리.

**변경 내용**: `Rich Text Editor`(`129:677`) Full(`116:478`)/Compact(`129:642`) 내부 32개 아이콘 인스턴스 레이어명에서 `(placeholder)`/` - placeholder`만 제거(예: "Toolbar Icon (Undo - placeholder)" → "Toolbar Icon (Undo)"). 아이콘 글리프·위치·크기·색상·토큰 바인딩은 전혀 변경하지 않음. 검증: 재조회 결과 "placeholder" 문자열 전부 제거 확인, 좌표/크기 동일, `get_variable_defs` 토큰 세트 동일(하드코딩 0건), 임시 노드 생성 없음, 32/32 성공. 원본 작업 파일은 이번 작업에서 호출하지 않음.

**사용자 결정(2026-09-21)**: 이름 정리만 진행(방안 A). 열린 항목 #19(Compact undo/redo·outdent/indent 아이콘 중복)와 #20(Density-화면 매핑 검증)은 이번엔 보류 — #20은 P5(화면 조립 시점)에서 재확인 예정으로 유지.

퍼블리시: 사용자 완료(2026-09-22 확인).

## P2-4a — calendar/day, Button / Open, Popup_list 결과 (2026-09-22, 사용자 승인: 준비된 3종만 우선 제작)

원본(`mp4KoPM2jqzU2N9yGVBSrf`)은 읽기 전용. 전부 신규 DS 파일 `02 Components`(`1:2`) 내 새 섹션에 배치(기존 섹션과 좌표 겹침 없음 확인).

**조사 경위**: 1차 조사(읽기 전용)로 5개 항목(카드류/Graph/calendar/day/Popup_list/Button・Open) 전체를 훑은 뒤, 준비도가 높은 3종만 우선 승인받아 제작. 제작 1차 시도는 `figma-implementer` 서브에이전트(읽기 전용 도구만 보유, `use_figma` 없음)에 잘못 위임해 실패 — `general-purpose` 서브에이전트(쓰기 도구 포함, `figma-use`/`figma-generate-library` 스킬 로드)로 재위임해 완료.

| 컴포넌트        | node-id                    | 내용                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `calendar/day`  | `145:691` (섹션 `145:668`) | `Type`(Weekday/Saturday/Sunday) × `Selected`(False/True) = 6 variant + `Today`·`Show Number` boolean. 실측 색상: Gray/600(평일)·Gray/500·Red/300(3색 확인, 토/일 매핑은 추정 — 열린 항목 #21), 선택 시 Blue/600 원형+White. "Today" 점(6×6, Red/500)은 boolean으로 분리했으나 용도 자체가 미확인(열린 항목 #21). 버그 수정 1건: Show 불리언 반전 문제 발견 즉시 수정                                                                                                                                                                                                                          |
| `Button / Open` | `147:690` (섹션 `147:668`) | `Size`(Medium/Small) × `State`(Close/Open, Small엔 `more` 추가) = 5 variant. 색상은 State가 아니라 **Size 기준**(Medium=Brand/Primary, Small=Contents/Secondary) — 원본 실측으로 확정, 원래 가설("파랑=활성/회색=비활성") 정정. 아이콘은 Button 크기와 무관하게 `Icon/Arrow` Size=Small 고정, 색도 텍스트와 분리(Small 텍스트 Contents/Secondary, 아이콘 Border/strong) — 원본 자체 설계(열린 항목 #22)                                                                                                                                                                                       |
| `Popup_list`    | `148:722` (섹션 `148:673`) | `Type`(Radio_list/Check_list) = 2 variant + 8개 컬럼 Show boolean(Number/File/Text/User/Email/YN/Date/LinkButton, 기본 true). 첨부칩은 기존 `Chip/Meta` Style=file(`20:72`) 그대로 재사용(신규 제작 없음), "바로가기"는 기존 `Link`(`82:98`, Small) 인스턴스+아이콘 OpenNew로 교체. 체크 아이콘은 원본이 실제로는 "미체크 체크박스"였음을 발견해 신규 SVG 대신 기존 `Checkbox`(`31:17`, Selected=False)를 재사용(열린 항목 #23). 라디오 아이콘은 재사용 가능한 단독 컴포넌트가 없어 Border/default Ellipse로 개별 재현. 버그 수정 1건: 텍스트 자동 리네임으로 인한 바인딩 누락 발견 즉시 수정 |

**검증**: boundVariables 스팟체크(3개 컴포넌트 각 1개 이상) 전부 통과, 하드코딩 hex/px 0건(고정 geometry는 토큰 대상 아님으로 판단), 임시 노드 0건, TEXT 프로퍼티 중복 생성 없음 확인(Button/Open Label).

**미해결**: 열린 항목 #21(calendar 토/일·Today 점 의미 미확인, 화면 조립 시점 재검증 필요) · #22(Button/Open 아이콘 사이즈/색 분리는 원본 설계로 그대로 반영, 특이사항 기록만) · #23(Popup_list Check 재사용 판단 근거 기록).

퍼블리시: 사용자 완료(2026-09-22, P2-3와 함께).

## Popup_list 버그 수정 — 긴 텍스트 오버플로우 (2026-09-22)

**계기**: 퍼블리시 후 사용자가 "글씨 길이가 긴 경우의 처리가 이상하다"고 보고.

**원인 분석(검증 완료)**: ① 텍스트 컬럼(Number/제목/Text)에 말줄임 처리가 전혀 없어 한글이 음절 단위로 강제 절단됨(원본 마스터 `3732:23085`부터 있던 구조, 포팅 회귀 아님) ② 텍스트 컬럼만 `flex-grow`고 나머지는 고정폭이라 부담이 텍스트에만 몰림 ③ 행 높이가 hug라 텍스트 길이에 따라 최대 98px까지 불안정하게 늘어남 ④ Radio_list(1줄 유지)와 Check_list(2줄 허용)의 동작이 서로 달랐음 — **사용자 확인: 의도된 게 아니라 버그**.

**사용자 승인(2026-09-22)**: 방안 B(행 높이 고정 + 1줄 말줄임)로 두 variant 동작 통일.

**변경 내용**:

- Radio_list(`148:675`): 936×44(hug) → **936×38 고정**
- Check_list(`148:699`): 936×98(hug, 최대 2줄) → **936×38 고정** + paddingTop/Bottom 16→0(Radio_list와 통일, 승인 범위 밖이었으나 두 variant 동작 통일이라는 목표 달성에 필요해 함께 조정 — 원래도 변수 바인딩 없던 raw 값이라 토큰 바인딩 깨짐 없음)
- 텍스트 컬럼 8개(양쪽 variant Number×2·Title·텍스트) 전부 `textTruncation='ENDING'`, `maxLines=1` 적용 → 넘치면 1줄 말줄임

**검증**: 936×38 고정 확인, 긴 텍스트 임시 인스턴스로 1줄 말줄임+행높이 유지 확인, 짧은 텍스트 정상 표시 확인, boundVariables 스팟체크 통과, 임시 노드 0건(테스트 인스턴스 삭제 확인).

**새로 발견 → 해소됨**: 기본 placeholder 텍스트("제목입니다." 등)조차 이미 말줄임되어 보이는 문제(당시 "열린 항목" #24) 발견. 조사 결과 Show boolean이 false면 Figma auto-layout이 해당 컬럼에 공간을 배정하지 않아, 실사용 조합(예: Text+첨부칩+바로가기)에서는 텍스트 폭이 42px가 아니라 288~428px로 이미 충분함을 산술 검증(좌표 기반 계산)으로 확인 — **구조적 재설계는 불필요**했음. 아래 "Title/Text 비율 조정" 항목으로 해소.

### Title/Text 비율 조정 + 기본 프리뷰 정리 (2026-09-22)

**계기**: 위 조사 중 `Title`(항상 노출)과 `Text`(토글)가 둘 다 동일 비중 flex-grow라 동시에 켜면 50:50 분할되는 게 발견됨. 사용자 확인: **Title+Text 동시 사용이 실제로 있음**. 원본 실사용 인스턴스(`4646:23540`/`4646:23554`, "4.선택형 팝업(Select)" 화면) 조사 결과 원본은 50:50이 아니라 Title이 더 넓고 Text가 나머지를 흡수하는 패턴(해당 사례 Title 500px 고정 + Text flex, 2건 동일 재현) — 매 인스턴스 수동 오버라이드 대신 **Title:Text = 2:1 layoutGrow 가중치**를 기본값으로 반영하기로 결정(사용자 승인).

**변경 내용**:

- Title(`148:678`/`148:702`) `layoutGrow` 1→**2**, Text(`148:687`/`148:711`) `layoutGrow` **1 유지** — 둘 다 `layoutSizingHorizontal=FILL` 유지해 인스턴스에서 수동 폭 조정도 여전히 가능(API 속성상 확인, Figma 에디터 UI 드래그 동작 자체는 미확인)
- 마스터 기본 프리뷰(componentSet `148:722`)의 Show 기본값을 실사용에 가까운 조합으로 변경: `File`/`Text`/`Date`/`LinkButton`=true, `Number`/`User`/`Email`/`YN`=false (두 variant 동일)

**검증**: Title:Text 실측 비율 정확히 2.000:1(Radio_list 317.33:158.67px, Check_list 306.67:153.33px), 936×38 고정·1줄 말줄임 등 기존 수정 유지 확인, boundVariables 스팟체크 통과, 임시 노드 0건.

**결론**: 컬럼 폭 "재분배"라는 큰 구조 변경은 필요 없었고(Show 토글이 이미 자동 재분배), Title/Text 비율 문제만 layoutGrow 가중치로 가볍게 해결. 열린 항목 #24는 해소로 종료.

### 좌우 패딩 불일치 수정 + Chip/Meta 닫기버튼 Boolean 추가 (2026-09-22)

**계기 1**: 사용자가 Radio_list/Check_list 두 행을 나란히 캡처한 스크린샷으로 "Chip / Meta 시작 위치가 다르다"고 지적. 조사 결과 Radio_list 우측패딩=0, Check_list 우측패딩=16으로 달라서(원본 마스터 `3732:23086`/`3732:23099`에도 이미 있던 비대칭, 포팅 문제 아님) Title 폭이 10.67px 차이나며 발생. 좌우 대칭 패딩이 표준 패턴이라 판단해 Radio_list를 Check_list에 맞춰 수정(사용자 승인).

- 변경: Radio_list(`148:675`) `paddingRight` 0→**16**
- 검증: Chip/Meta(`148:679`) x좌표 397.33→386.67로 이동, Check_list의 Chip/Meta(`148:703`, x=386.67)와 완전 일치. Title:Text 2:1 비율·936×38 고정·1줄 말줄임 등 기존 설정 유지 확인. 긴 텍스트 케이스도 정상.

**계기 2**: 사용자가 "`Chip / Meta`의 닫기(×) 버튼을 Boolean 프로퍼티로 숨길 수 있게 해야 한다"고 요청. Table 조립 예시 등에서 닫기버튼이 불필요한 재사용 사례가 있어 승인.

- 변경: `Chip / Meta`(`20:80`) 컴포넌트셋에 `Show Close`(BOOLEAN, 기본값 **true**) 프로퍼티 추가, 9개 variant 전부의 닫기 아이콘 인스턴스(`Icon / Close Circle`, `85:47` 참조)의 `visible`을 이 프로퍼티에 바인딩.
- 검증: 기본값 true라 기존 9개 variant 외형 변화 없음 확인. false 토글 테스트(임시 인스턴스)에서 너비 120→96(아이콘+gap만큼)으로 자동 축소, 레이아웃 자연스럽게 줄어듦 확인. 재조사 결과 "Table 조립 예시"(`92:590`)에는 애초에 `Chip / Meta` 인스턴스가 없음(다른 컴포넌트였음, 이번 변경과 무관) — 2단계(재사용처 오버라이드)는 대상이 재확인되면 별도 진행.

**검증(공통)**: boundVariables 스팟체크 통과, 임시 노드 0건.

퍼블리시: 사용자 완료(2026-09-22 확인).

## P2-4b (1/2) — 요약 카드류 + contents_mainlist + 신규 상태칩 (2026-09-22)

원본(`mp4KoPM2jqzU2N9yGVBSrf`)은 읽기 전용. 조사 결과 카드류/Graph 5개 항목 중 준비도가 확인된 4개를 먼저 제작(Graph는 보류, 프로젝트 카드·RecentViewed_Item은 2/2로 별도).

**조사에서 확정된 사실**: `contents_mainlist` 상태칩("검토중"/"초안작성" 등)은 원본에 **상태별 색 구분이 전혀 없음**(전부 동일: `Border/divider`+`Gray/600`, 배경 없음) — "상태별 다른 색" 가설은 기각됨. 자문(Advisory) 카테고리 아이콘만 원본이 `Green/500`을 쓰는데 정의된 `Brand/Advisory`는 `Teal/500`이라 불일치(원본 버그로 판단).

| 컴포넌트                    | node-id                                    | 내용                                                                                                                                                                                                                                                                 |
| --------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `score_board_main`          | `182:3` (섹션 "Score Board" `182:2`)       | 완전 토큰 준수, 원본 그대로 이관. 원본의 숨김 "새항목추가" variant는 범위 밖(미구현)                                                                                                                                                                                 |
| `score_board_statistic`     | `183:2` (같은 섹션)                        | 제목/증감률이 15개 Text Style 카탈로그에 없어 **근사 처리**(제목 18px→`Heading/Large` 20px, 증감률 15px Medium→`Paragraph/Medium` 16px, 사용자 승인). 원본 자체의 숫자 텍스트박스 줄바꿈 버그를 신규 컴포넌트에서는 WIDTH_AND_HEIGHT로 수정(원본은 그대로 버그 있음) |
| `notice_board`              | `184:3` (섹션 "Notice Board" `184:2`)      | 정확 일치. "공지" 배지 보더색을 원본의 `Border/default`(원본 자체 불일치)가 아니라 `Border/divider`로 통일(지시대로). 2행만 구현(원본 hidden 최대 5행 — 다중 공지 리스트 처리는 범위 밖)                                                                             |
| `Chip / Status Text` (신규) | `181:2` (기존 Chip 섹션 `17:2` 내부)       | 경량 전용 칩(색 구분 없음, 배경 없음, `Border/divider`+`Gray/600`, `Text` 프로퍼티로 내용 교체). 기존 `Status`/`Chip/Stage`/`Signal Badge` 대신 신규 제작(사용자 결정). 폰트는 15px Medium→`Paragraph/Medium` 근사                                                   |
| `contents_mainlist`         | `186:4` (섹션 "Contents Mainlist" `186:3`) | 카테고리 아이콘 계약/소송은 원본과 정확 일치(`Brand/Contract`·`Brand/Litigation`), **자문만 `Brand/Advisory`(Teal/500)로 바로잡음**(원본 `Green/500`은 재현 안 함, 의도적 처리, 사용자 승인). 상태칩은 위 `Chip/Status Text` 인스턴스 재사용. 높이 가변(hug) 유지    |

**검증**: boundVariables 스팟체크 5개 전부 통과, 하드코딩 hex/px 0건(폰트 근사 편차 3건은 기록·허용), 임시 노드 0건, 상태칩 Text 교체 테스트 정상.

**미확인/열린 항목**: `Icon/Menu_S`의 Contract/Litigation 벡터 path 해시 대조 미완료(색상값만 확인, Advisory만 path 대조 완료) — 아이콘 형태 자체가 원본과 100% 일치하는지는 미확인.

⚠️ **버그 발견(다음 배치 작업 중 확인)**: 이 5개 컴포넌트(Score Board 섹션 `182:2`, Notice Board 섹션 `184:2`, Contents Mainlist 섹션 `186:3`)가 실수로 `02 Components`가 아니라 **`01 Tokens` 페이지에 생성됨**. `Chip / Status Text`(`181:2`)는 기존 Chip 섹션(`17:2`) 안에 넣어서 정상 위치. 아래 "페이지 위치 수정" 항목에서 바로잡음.

퍼블리시: **완료 확인**(2026-09-28 재조사, updatedAt 2026-09-22T13:42~56Z 라이브러리 반영 확인 — 이전 기록 "미완료"는 정정됨).

## P2-4b (2/2) — Badge 이관 + Project Card + RecentViewed Item (2026-09-22)

원본(`mp4KoPM2jqzU2N9yGVBSrf`)은 읽기 전용. 프로젝트 카드·RecentViewed_Item 둘 다 원본에 재사용 가능한 마스터가 없어(복사된 프레임/인스턴스만 존재) 이번에 최초로 컴포넌트화함.

| 컴포넌트                                        | node-id                                                                                | 내용                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Badge / Category`, `Badge / Count` (신규 이관) | 섹션 `188:722`, Category=`188:729`(Kind=Contract/Advisory/Litigation), Count=`188:730` | 원본(`4455:42`/`4455:34`) 색상이 `Brand/Contract`·`Brand/Advisory`·`Brand/Litigation`과 **정확히 일치**(별도 정정 불필요). Count 보더만 대응 토큰 없어 `Border/divider`로 근사                                                                                                                                                                                   |
| `Project Card` (신규)                           | 섹션 `193:727`, 컴포넌트 `190:727`                                                     | 배지 4개를 위 `Badge/Count` 실제 인스턴스로 교체(직접 그린 배지 아님, mainComponentId 확인). 하드코딩 색상 다수(`#42464c`/`#606c80`/`#ebeef2` 등)를 Contents/Secondary·Tertiary·Border/divider로 근사(정확 대응 토큰 없음, 편차 34~39 기록). 그림자는 기존 `elevation_basic`로 근사. 제목 2줄은 원본이 auto-wrap이 아니라 하드 줄바꿈이었음을 발견해 그대로 재현 |
| `RecentViewed Item` (신규)                      | 섹션 `196:730`, 컴포넌트 `195:727`                                                     | **지시서 가정 정정**: "태그 2개 칩"이 아니라 실제로는 `Chip_s`(기존 `21:2`, 그대로 재사용) 1개 + 믹스스타일 리치텍스트 1개였음, 원본 그대로 재현. 카테고리 아이콘은 `Icon/Menu_S`(Menu=Contract, `69:73`) 인스턴스 색을 `Brand/Contract`로 오버라이드(자문 아이콘 정정과 동일 패턴). 텍스트 스타일은 근사 없이 정확 일치(`Label/Xsmall`·`Label/Medium`)          |

**검증**: boundVariables 스팟체크 통과(신규 작성 노드는 하드코딩 0건; 인스턴스 내부 잠긴 레이어 2건은 마스터 컴포넌트 자체의 기존 상태라 수정 불가 항목), 임시 노드 0건, Badge 인스턴스 mainComponentId 4/4 확인.

**미확인/열린 항목**: Project Card·RecentViewed Item의 Kind별(Advisory/Litigation) 색상 자동 스위칭은 이번엔 기본값(Contract)만 구현 — 실사용 시 카테고리별 인스턴스 오버라이드 필요.

퍼블리시: **완료 확인**(2026-09-28 재조사. 단 `RecentViewed Item`만 updatedAt이 15:22:00Z로 나머지(13:42~56Z)보다 약 1시간40분 늦음 — 같은 날 별도 재퍼블리시 흔적으로 추정, 문제 아님).

## 페이지 위치 수정 — 01 Tokens에 잘못 생성된 5개 컴포넌트 (2026-09-22)

**계기**: 위 "P2-4b (2/2)" 작업 중 다른 세션이 Score Board/Notice Board/Contents Mainlist 3개 섹션을 `02 Components`가 아니라 `01 Tokens` 페이지에 잘못 생성한 것을 발견.

**조치**: `02 Components` 페이지 노드에 `appendChild()`로 3개 섹션(좌표 x0/y10100~11300, 기존 섹션들과 겹치지 않아 좌표 변경 없이 그대로) 이동 완료.

**검증**: 이동 후 `02 Components`에 3개 섹션+하위 컴포넌트 전부 정상 존재, `01 Tokens`에는 흔적 0건(6개 원래 섹션만 남음, 이동 대상과 애초에 좌표 겹친 적도 없었음 확인). `score_board_main`(`182:3`) 스팟체크로 이동 전후 width/height/boundVariables 완전 동일 확인(구조 손상 없음). 임시 노드 0건.

퍼블리시: **완료 확인**(2026-09-28 재조사, 이동 후에도 구조·boundVariables 손상 없이 `02 Components`에 정상 반영됨 확인).

## P3 (1/2) — Overlay 토큰 + Modal Confirm/Export (2026-09-22)

원본(`mp4KoPM2jqzU2N9yGVBSrf`)은 읽기 전용. 조사 결과 5개 모달 타입(Confirm/Comment/다중입력/Select/Export) 중 구조가 명확한 2개(Confirm, Export)부터 제작(사용자 승인). 새 "Modal" 섹션(`201:733`, `02 Components` x=0,y=11500).

**정정된 사실**: LNB는 전역 내비게이션이 아니라 "업무현황" 대시보드 로컬 필터 위젯, `Button_XL`은 메인홈 퀵액션 버튼("새 계약"/"새 자문")이며 둘 다 Header 하위 요소가 아님 — 이번 배치엔 미포함(별도 판단 필요).

| 컴포넌트                  | node-id                                       | 내용                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Overlay/Dim` (신규 토큰) | `VariableID:201:2`                            | 원본에 오버레이 스펙 자체가 없어 신규 정의(사용자 승인). 검정 45% 불투명도, alias+opacity 조합 미지원이라 직접값(`#00000073`) 사용(`State/ErrorTransparent`와 동일 처리 방식)                                                                                                                                                                         |
| `Icon / Status` (신규)    | `202:739`, State=Warning/Success/Error, 56×56 | Warning은 원본 `icon_warnning`(`4345:46776`) 재사용. **Success/Error는 원본에 에셋 자체가 없어 신규 제작**(원+글리프 벡터). Success는 지시서의 "파란 체크" 대신 기존 `State/Success` 토큰(녹색)을 우선 적용 — 시맨틱 토큰이 이미 정의한 색을 따름                                                                                                     |
| `Modal / Confirm`         | `203:736`                                     | radius `Radius/MD`(16, 원본 유지). 버튼 전부 `Button/Basic`(Pill) 인스턴스로 통합(원본 `Button / Rounded` 재현 안 함, 사용자 승인). 취소=Kind Negative(원본 근사 hex와 가장 가까운 기존 Kind), 확인=Kind Primary. 아이콘 슬롯은 INSTANCE_SWAP으로 `Icon/Status` 3종 전환                                                                              |
| `Modal / Export`          | `205:792`                                     | State variant 5종(Initial/Loading/Downloading/Complete/Failed), radius `Radius/LG`(24, 원본 유지). 버튼도 `Button/Basic`(Pill)로 통합(원본 `Button_L_Rounded` 재현 안 함). 취소 버튼 hex 차이(원본 `#f5f5f5` vs Confirm `#f4f4f5`)는 Kind Negative 하나로 통일(지시대로). Loading 스피너는 원본에 애니메이션 에셋이 없어 정적 부분호 벡터로 신규 제작 |
| 오버레이 사용 예시        | `205:793`(Confirm), `205:811`(Export)         | Table 조립 예시와 동일 방식(컴포넌트 아님), `Overlay/Dim` 배경 위 모달 배치 확인용                                                                                                                                                                                                                                                                    |

**검증**: boundVariables 스팟체크 통과, Confirm 3가지 프로퍼티 조합·Export State 5종 전환 테스트 통과 후 기본값 복원, 정리 중 발견된 중복 placeholder 프레임(`201:735`) 1건 삭제 확인, 그 외 임시 노드 0건.

**범위 밖 추가 사항(투명하게 기록)**: `Modal / Confirm`에 원본에 없던 `elevation16` 이펙트 스타일을 모달 부상감을 위해 추가함 — 지시 범위 밖이라 별도 표기, 불필요하면 제거 검토.

**미해결/열린 항목**: 원본 Confirm(`2845:12444`, 40×40)과 Export(`4345:46776`, 56×56)의 경고 아이콘 크기가 서로 달랐던 것을 56×56으로 통일(원본 자체의 불일치, 최초 조사 메모의 "40px"는 Confirm 기준값이었던 것으로 재정정). Export 본문 텍스트가 대체 폰트 메트릭 차이로 3줄째 줄바꿈이 약간 어색함(경미, 실제 macOS 폰트 확인 시 재검토).

퍼블리시: 미완료(사용자 예정).

## P3 (2/2) — Input / File Dropzone + Modal / Comment (2026-09-22)

원본(`mp4KoPM2jqzU2N9yGVBSrf`)은 읽기 전용. Modal 섹션(`201:733`)에 이어서 배치.

| 컴포넌트                       | node-id   | 내용                                                                                                                                                                                                                                                           |
| ------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Input / File Dropzone` (신규) | `209:795` | 원본(`2852:14137`)에 대응 컴포넌트 없어 신규 제작. 업로드 아이콘은 원본 커스텀 40px 대신 기존 `Icon` 세트 `cloud-upload`(24px) 재사용(지시대로), "업로드" 링크는 기존 `Link`(Small) 인스턴스. State 없음(원본에 Hover/Dragging/Error 없음 확인, 단일 컴포넌트) |
| `Modal / Comment`              | `210:797` | width 450, radius 16(Confirm과 동일). 재사용: `Radio`, `Chip/Meta`(UserBorder/file), `Input/Dropdown`, `Input/Textarea`, `Button/Icon`, `Button/Basic`(Secondary/Negative/Primary)                                                                             |

제작 중 원본을 재조회하다가 지시서의 6개 Boolean 가정과 원본 실제 동작이 어긋나는 걸 발견함 — ① Person 아이콘 쓰는 유저 태그 칩은 원본에서 **불리언 없이 무조건 노출**이었음(지시서는 `addUser`로 토글 가능하다고 가정) ② 원본 `addUser`는 실제로는 "유저 태그"가 아니라 **파일첨부 목록 행**이었음. 에이전트가 임의로 "Show User=무조건표시 Person 태그로 승격, Show File=addFile(드롭존)+addUser(첨부파일 목록) 통합"으로 재구성함. 첨부파일 슬롯은 3개 대신 2개로 축소, 유저 칩 내부 두 번째 텍스트런(파란 소문자, 역할/시간 추정)은 기존 `Chip/Meta` 구조에 없어 생략.

**✅ 사용자 승인 완료(2026-09-28)**: 재조사로 원본 스크린샷(`4345:48253` 등 팝업 카탈로그 인스턴스)을 다시 확인한 결과 위 재구성이 원본과 일치함을 시각적으로 재확인 — Person 칩 무조건 노출, "항목명" 섹션이 파일첨부 목록 행과 위치·형태 일치. 사용자가 스크린샷 확인 후 그대로 승인.

**검증**: boundVariables 스팟체크 통과, 8개 Boolean 프로퍼티 중 2가지 조합 토글 테스트 통과 후 기본값 복원, 임시 노드 0건(페이지 전체 재점검 완료).

**미확인**: 파일 목록 3번째 슬롯 필요 여부, `Chip/Meta` 두 번째 텍스트런 확장 여부.

퍼블리시: 미완료(사용자 예정).

## P3 나머지 — Modal/다중입력·Select + LNB + Button/Basic Size=XL (2026-09-28)

원본(`mp4KoPM2jqzU2N9yGVBSrf`)은 읽기 전용. 재조사(착수 전 필수) 결과를 바탕으로 사용자 승인 받아 진행. 이 배치로 P3 전체 항목 완료(퍼블리시만 남음).

**재조사에서 확정된 사실**: `Modal / 다중입력`(원본 `4345:46881`)·`Modal / Select`(원본 `4345:46886`)는 전부 기존 신규 DS 컴포넌트 조합만으로 제작 가능, 신규 원자 불필요. `LNB`("업무현황" 위젯, 원본 `4345:17105`)는 "아이콘+라벨 세로 리스트, 선택 시 풀필 하이라이트" 패턴 컴포넌트가 신규 DS에 없어 신규 제작 필요. `Button_XL`(원본 `3354:26903`, 메인홈 퀵액션)은 `Button/Basic` 확장만으론 부족(아이콘 32px·SemiBold 20px 타이포·그림자·Secondary가 outline 아닌 solid — 4가지 불일치)해서 Size=XL variant로 확장.

| 컴포넌트               | node-id                                 | 내용                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Modal / 다중입력`     | `230:992` (Modal 섹션 `201:733`)        | 재사용: Tab Group(2탭, 3번째 탭 숨김)·Form Field(Field×5/Dropdown×2/Textarea×1)·Checkbox/Label·Input/File Dropzone·Button/Basic. 조립 예시 `231:1163`                                                                                                                                                                                                                                                                                                                                 |
| `Modal / Select`       | `233:1115` (Modal 섹션 `201:733`)       | 재사용: Tab Group(3탭)·Form Field·Button/Basic(검색/선택삭제/취소/확인/닫기)·Popup_list(Check_list)·Pagination. **원본 변형 3종 확인 결과 체크박스 없는 단일선택 모드는 존재하지 않아 임의 창작하지 않음.** 조립 예시 `234:1377`                                                                                                                                                                                                                                                      |
| `LNB / Filter Item`    | `243:1552` (신규 섹션 "LNB" `247:1561`) | `Menu`(All/Contract/Advisory/Litigation/Document) × `Selected`(False/True) = 10 variant. `Show Icon` boolean(All=false, 나머지=true) + 아이콘 없을 때도 40px 스페이서 유지해 라벨 정렬 통일. 아이콘은 `Icon/Menu_S` 재사용. 미선택 텍스트/아이콘=`Contents/Tertiary`, 선택=`Contents/Primary`+배경 `Surface/Secondary`(**좌측 accent bar 없음** — 원본은 있었으나 메모리 규칙에 따라 순수 풀필로 대체). 조립 예시 `244:1567`. 숨은 depth/보안 variant는 범위 밖으로 제외(사용자 확정) |
| `Button/Basic` Size=XL | `44:65` — **철회됨(아래 참조)**         | ~~Kind5×State3×Shape2 전부 XL 셀 생성~~. Primary/Secondary만 원본 검증됐고 나머지 3 Kind는 미검증인 채로 90 variant까지 늘어나는 게 과하다고 사용자가 판단(2026-09-28) — 되돌림                                                                                                                                                                                                                                                                                                       |

### Button/XL 분리 (2026-09-28, 사용자 재검토 후 결정)

**계기**: 위 `Button/Basic` Size=XL 확장 완료 후 사용자가 "이렇게 다양한 버전은 필요없을 것 같다"고 재검토 요청. 원인은 Figma 컴포넌트셋 구조상 `Size=XL`을 기존 `Kind` 축(5종)과 결합하면 부분집합이 불가능해 실사용(Primary/Secondary 2종)보다 훨씬 많은 셀(5종)이 강제로 생겼기 때문 — 재작업보다 구조를 바꾸는 게 근본 해법이라 판단해 별도 컴포넌트로 분리하기로 결정.

**변경**: `Button/Basic`(`44:65`)의 Size=XL 30 variant 전부 삭제 → **60 variant로 복귀**(Medium/Small만, 기존 값 무변경). 섹션(`44:66`) 크기도 1264×2480→1264×1060으로 원복.

신규 **`Button/XL`**(섹션 `258:1578`, 컴포넌트셋 `258:1577`) — `Kind`(Primary/Secondary) × `State`(Default/Hover) = **4 variant만**(원본에 있는 축만, Disabled·Shape 없음):

| Variant           | node-id    |
| ----------------- | ---------- |
| Primary/Default   | `258:1561` |
| Primary/Hover     | `258:1565` |
| Secondary/Default | `258:1569` |
| Secondary/Hover   | `258:1573` |

토큰: 배경 Primary=`Brand/Primary`(Hover는 Blue/800, Button/Basic Primary 로직 재사용) · Secondary=`Brand/Secondary`(Blue/300 alias) solid 채움(Default/Hover 동일 — Secondary 전용 hover 원색 토큰 없음, 편차로 기록) · 텍스트/아이콘 White · `Radius/SM` · `elevation3` · 패딩 좌우 `Spacing/24`·상하 `Spacing/16`·gap `Spacing/16` · 텍스트 `Label/Large` 기준+letterSpacing -0.25 수동 오버라이드. 아이콘은 `Icon`(INSTANCE_SWAP, 기본 `Icon/Menu_S` Contract Basic) + `Show Icon`(boolean) 32×32, `Text`(TEXT, 기본 "새 계약").

**검증**: `Button/Basic` 60-variant 그리드 스크린샷 정상, `Button/XL` 4-variant 스크린샷 정상, `get_variable_defs` 하드코딩 0건(양쪽), 페이지 30개 섹션 겹침 0건, 임시 노드 0건.

**의사결정 경위**: 착수 전 재조사(사용자 지시)로 5개 항목 원본 스크린샷·구조 확보 → 계획 보고 → AskUserQuestion으로 4가지 확정(모달 2종 바로 제작·LNB 범위는 지금 필요한 5개만·LNB 하이라이트는 `Surface/Secondary` 근사·Button_XL은 정밀 재현+Kind는 Primary/Secondary만 원본 검증) → 실행 단계에서 서브에이전트가 추가로 발견한 미결 사항(Contents/Tertiary 정정, "전체" 행 레이아웃, Button/Basic Kind 축 구조 제약)은 코디네이터가 판단해 지시, 최종 실행 승인은 사용자가 대화에서 직접 확인.

**검증**: `get_variable_defs` 스팟체크(LNB 셋/조립 예시, Button XL Primary·Secondary·Negative 샘플) 하드코딩 0건. 임시 노드 0건(변환 전 프레임은 in-place 대체로 소멸 확인). 페이지 30개 섹션 전수 겹침 검사 — 신규 섹션(LNB, 확장된 Button)은 안전 거리 확보. **기존에 있던 것으로 보이는 Modal/ResultCard 섹션 간 겹침 1건 발견됨(이번 작업과 무관, 미변경, 별도 확인 필요로 기록만)**.

**근사 처리 요약**: LNB 미선택 색은 `Contents/Tertiary`(Gray/500)로 원본과 정확 일치(근사 아님). Button XL 타이포는 `Label/Large` 기반+letterSpacing 수동 오버라이드(원본은 Bold, DS는 SemiBold 유지 우선), 그림자는 `elevation3`로 근사(원본 단일 레이어 대비 3레이어 조합이라 약간 다르게 퍼짐).

퍼블리시: **완료**(사용자, 2026-09-28) — 단, 이후 `Button/XL` 분리 변경분은 별도 재퍼블리시 필요(위 "Button/XL 분리" 항목 참조).

## P6 (부분) — 통합검색 `ResultCard` 컴포넌트 (2026-09-28)

원본 작업 파일(`mp4KoPM2jqzU2N9yGVBSrf`)은 읽기만 함(구조·스타일 변경 없음). 대상: 프레임 A "Search/Result-Legal"(`4345:55923`, 컨테이너 `4345:55949`, 카드 10개) + 프레임 B "Search/Result"(`4345:55073`, 컨테이너 `4345:55149`, 카드 10개). 신규 컴포넌트는 DS 파일 `jRZzfr9vGsyGKCvT5HS0Gp`의 `02 Components`(`1:2`)에 생성.

**⚠️ 사전 조사로 지시서 가정이 정정됨**: 지시서는 프레임 B를 "계약형 6개, 분쟁관련형 4개"로 가정했으나, `get_metadata`+`get_screenshot` 실사 조사 결과 **두 프레임 모두 계약형/소송형/분쟁관련형 외에 "자문형"(자문내용/자문답변 필드) 카드가 섞여 있음**을 확인함. 20개 카드 전수 분류 결과:

| 카드유형                         | 개수(A+B) | 비고                                                                                                                                                                                                                                                               |
| -------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 계약형(승인된 3타입 모델에 부합) | 4         | A: `55950`(헤더전용), `55984`(본문포함) · B: `55150`(헤더전용), `55183`(본문포함, hidden)                                                                                                                                                                          |
| 계약형 + 사건번호 부가필드(예외) | 2         | A: `56086` · B: `55284` — 메타라인에 소송 사건번호 칩("20260702-Buptle 5678")과 "계약서" 버전선택 드롭다운이 추가로 존재. 승인된 계약형 필드 정의에 없는 구조라 **강제 매칭하지 않고 원본 그대로 유지**                                                            |
| 자문형(승인 범위 밖, 예외)       | 6         | A: `56191`(헤더전용), `56297`·`56370`(본문포함) · B: `55389`(헤더전용), `55495`(본문포함, hidden), `55567`(본문포함) — "자문내용/자문답변" 필드로 계약/소송/분쟁관련 3타입 어디에도 대응 안 됨. 4번째 카드유형은 이번 승인 범위에 없어 **교체하지 않고 원본 유지** |
| 소송형                           | 2         | A: `56443`(본문포함, 사용자가 예시로 지목한 카드) · B: `55640`(본문포함)                                                                                                                                                                                           |
| 분쟁관련형(수신/내용증명)        | 6         | A: `56503`(헤더전용), `56578`(헤더전용 — 겉보기엔 본문포함처럼 높이가 있으나 본문 컨테이너 전체가 hidden이라 실제로는 헤더전용), `56653`(본문포함) · B: `55700`(헤더전용), `55775`(헤더전용, hidden), `55848`(본문포함)                                            |

→ **교체 대상 12개**, **예외(원본 유지) 8개**(자문형 6 + 계약형·사건번호 예외 2). 20 = 12 + 8.

**`ResultCard` 컴포넌트셋** — 섹션 "Result Card"(`230:909`, `02 Components` x=0,y=13700), 컴포넌트셋 `231:1107`(key `b9e63902cbf7b15f04897e45f7feb942607379be`), 6 variant:

| Variant                                | node-id    | key                                        |
| -------------------------------------- | ---------- | ------------------------------------------ |
| 카드유형=계약형, 표시상태=헤더전용     | `230:910`  | `cec1c6053fd5ebeddb485e3c790837842a6bc4d3` |
| 카드유형=계약형, 표시상태=본문포함     | `230:952`  | `b2e90572c2b10ff778c5611ae6927f444714a5a0` |
| 카드유형=소송형, 표시상태=헤더전용     | `231:949`  | `979cb99b783e88b2c1793e4ca5b80ba7d36553c6` |
| 카드유형=소송형, 표시상태=본문포함     | `231:972`  | `ba7ad97ad943c375d909f84354f981996264ef7e` |
| 카드유형=분쟁관련형, 표시상태=헤더전용 | `231:1012` | `8fe08d1fddf2297b4ba0df254ea7eb6c47ace498` |
| 카드유형=분쟁관련형, 표시상태=본문포함 | `231:1071` | `bb2200569a53acc0ee890540fd27f4f08b0cc9a0` |

컴포넌트 프로퍼티: `카드유형`/`표시상태`(VARIANT, 승인된 구조 그대로) + `Title`(TEXT, 기본값 "Buptle 용역계약 글자수길게들어갈경우에는 가나다라마바사" — 세트 전체 공유 기본값 1개 제약으로 6개 variant 전부 이 값이 기본, 인스턴스별 override 필요) + `첨부파일유무`(BOOLEAN, 기본 true) + `코멘트유무`(BOOLEAN, 기본 false — 3개 본문포함 variant 중 원본 예시가 있는 건 계약형뿐이라 그 예시를 기준으로 켤 수 있지만, 부울 기본값도 세트 전체 공유라 다수(소송형·분쟁관련형 예시 없음/false)에 맞춰 false를 기본으로 선택, 계약형 사용처는 인스턴스에서 true로 override 필요).

**재사용한 기존 컴포넌트**: `Icon / Menu_S`(`69:73` Contract / `69:44` Litigation / `69:53` Documents), `Chip_s`(`21:2`, "계열사명" 라벨), `Chip / Meta`(Style=file, `20:72`, 첨부파일 칩) — 새로 만든 요소 없음(재사용 우선 원칙 준수). 코멘트 말풍선(rounded rect + 텍스트)은 대응하는 기존 컴포넌트가 없어 리터럴 프레임으로 신규 제작(Radius/SM, Spacing/16 토큰 바인딩).

**단순화/근사 처리 (기록)**:

- 원본 타이틀의 검색어 하이라이트(노란 배경 알약)는 검색 기능에 종속된 일시적 강조라 판단해 재현하지 않음(제목 텍스트만 유지).
- 소송형 타이틀 옆 사건번호는 `Title` 텍스트 그룹 내부에 고정 폭(260px) 텍스트 + "|" 구분자 + 사건번호 텍스트로 구성 — 컴포넌트 프로퍼티로 노출하지 않고 인스턴스 오버라이드로 처리(텍스트 프로퍼티 세트당 기본값 1개 제약 때문에 타입별 다른 기본값을 가질 수 없어, Title 프로퍼티와 별개의 순수 인스턴스 텍스트로 둠).
- 소송형 "노트" 옆에 있던 원본의 정체불명 보조 버튼(라벨 불명, 기능 미상)은 승인된 4-프로퍼티 모델 밖의 요소라 재현하지 않음(열린 항목으로 기록).
- 분쟁관련형 본문포함 variant는 원본 예시(A `56653`/B `55848`) 어디에도 "노트/자문내용" 같은 베이스라인 텍스트가 없어(있어도 hidden) 첨부파일·코멘트 블록만 구성.
- `Menu_S/Documents` 아이콘 색이 DS 마스터 기본값(파랑 계열)이라 원본의 회색 아이콘과 다름 — 기존 컴포넌트 재사용 우선 원칙에 따라 마스터 그대로 사용, 색 보정 안 함(원본과 편차 있음, 기록).

**검증**: boundVariables 스팟체크 통과(Title/Date fill, Header/Meta/Body의 itemSpacing·paddingTop, CommentBubble 배경·padding·radius 전부 변수 바인딩 확인), 하드코딩 hex 0건. 하드코딩 px는 구조적 지오메트리 2건만 존재(아이콘 컬럼 고정폭 56px, 소송형 타이틀 고정폭 260px — 둘 다 Table 컬럼폭과 같은 성격의 "콘텐츠 고정 지오메트리"로 토큰 대상 아님으로 판단). 임시 노드 0건(섹션 내 자식 1개 = 컴포넌트셋만 존재 확인). `get_screenshot`으로 6 variant 전체 시각 검증 완료(계약목적/노트/첨부파일/코멘트 블록 정상 렌더링, 높이 hug 정상 — 헤더전용 53px, 본문포함 계약형·소송형 280px·분쟁관련형 221px).

**⚠️ 블로커 — 원본 파일 인스턴스 교체 미완료**: `figma.importComponentByKeyAsync()`로 방금 만든 `ResultCard` variant key를 원본 작업 파일(`mp4KoPM2jqzU2N9yGVBSrf`)에서 임포트 시도한 결과 `"Component with key ... not found"` 오류 확인 — **팀 라이브러리로 퍼블리시되지 않은 컴포넌트는 다른 파일에서 인스턴스화가 원천적으로 불가능함**(Figma 플랫폼 제약, 우회 불가). 지시서는 "퍼블리시는 사용자가 수동으로 할 예정이니 하지 말 것"과 "20개 카드를 전부 인스턴스로 교체할 것"을 동시에 요구했는데 이 둘은 양립 불가 — 퍼블리시 없이는 원본 파일에 진짜 컴포넌트 인스턴스를 만들 수 없음. 정적 복사본(컴포넌트 연결 없는 사본)으로 대체하는 방법도 있었으나, 이는 "인스턴스 교체"의 목적(variant 전환·업데이트 전파)을 무력화하는 가짜 완료이므로 진행하지 않음. **따라서 이번 배치는 컴포넌트 제작까지만 완료하고, 원본 파일 교체는 사용자가 라이브러리를 퍼블리시한 뒤 별도 세션에서 진행해야 함.** 위 표의 12개 교체 대상 node-id·타입·variant·boolean 조합, 그리고 6개 variant의 key는 다음 세션에서 바로 쓸 수 있도록 이 문서에 기록해 둠.

**다음 세션에서 할 일(퍼블리시 후)**: ① 위 6개 variant key로 `importComponentByKeyAsync` 성공 확인 ② 12개 대상 카드를 `카드유형`/`표시상태`/`Title`/`첨부파일유무`/`코멘트유무` 조합에 맞게 인스턴스 생성 후 원본 위치에 배치, 실제 텍스트(제목·메타·날짜·첨부파일명·코멘트) 입력 ③ hidden 카드 3개(`55183`,`55775`, 그리고 A측 hidden은 없음 — A는 전부 visible)는 교체 후 `visible=false` 유지(자식 접근 시 `skipInvisibleInstanceChildren=false` 필요, B `55183`은 코멘트유무=true로 설정) ④ 교체 전/후 스크린샷으로 두 프레임 전체 시각 비교 ⑤ 예외 8개(자문형 6 + 사건번호 계약형 2)는 원본 그대로 두고 이 문서의 표를 그대로 인용해 사유 기록.

퍼블리시: **완료**(사용자, 2026-09-28) — 아래 "12개 카드 인스턴스 교체 완료" 참조.

### 12개 카드 인스턴스 교체 완료 (2026-09-28)

`importComponentByKeyAsync` 6개 variant key 전부 성공(사전 실패했던 "Component with key ... not found" 오류 해소 확인). 원본 작업 파일에서 12개 대상 카드를 FRAME → 신규 `ResultCard` INSTANCE로 교체 완료.

| 원본 node-id (구) | 신규 인스턴스 id | 카드유형/표시상태   | 비고                                                               |
| ----------------- | ---------------- | ------------------- | ------------------------------------------------------------------ |
| `4345:55950`      | `4859:353`       | 계약형/헤더전용     | Frame A                                                            |
| `4345:55984`      | `4859:373`       | 계약형/본문포함     | Frame A, 코멘트유무=true                                           |
| `4345:56443`      | `4859:421`       | 소송형/본문포함     | Frame A, 첨부파일명 "Buptle 파일제목.docx"로 override              |
| `4345:56503`      | `4859:468`       | 분쟁관련형/헤더전용 | Frame A                                                            |
| `4345:56578`      | `4859:492`       | 분쟁관련형/헤더전용 | Frame A (본문 컨테이너 hidden이라 헤더전용 취급, 문서 기록과 일치) |
| `4345:56653`      | `4859:513`       | 분쟁관련형/본문포함 | Frame A, 코멘트유무=true, 코멘트 텍스트+첨부파일명 override        |
| `4345:55150`      | `4859:47911`     | 계약형/헤더전용     | Frame B                                                            |
| `4345:55183`      | `4859:47929`     | 계약형/본문포함     | Frame B, **visible=false 유지**, 코멘트유무=true                   |
| `4345:55640`      | `4859:47965`     | 소송형/본문포함     | Frame B, 첨부파일명 override                                       |
| `4345:55700`      | `4859:48002`     | 분쟁관련형/헤더전용 | Frame B                                                            |
| `4345:55775`      | `4859:48023`     | 분쟁관련형/헤더전용 | Frame B, **visible=false 유지**                                    |
| `4345:55848`      | `4859:48044`     | 분쟁관련형/본문포함 | Frame B, 코멘트유무=true, 코멘트 텍스트+첨부파일명 override        |

**적용 방법**: `parent.insertChild(oldIndex, newInstance)` 후 `oldNode.remove()` — 두 컨테이너(`4345:55949`, `4345:55149`)가 `VERTICAL` auto-layout(itemSpacing 24)이라 인덱스만 맞추면 위치·간격 자동 재계산됨. 교체 후 자식 수 불변 확인(A 18개, B 16개), 예외 8개는 여전히 FRAME 타입으로 미변경 확인.

**콘텐츠 override 과정에서 발견한 사실**: 컴포넌트 제작 시(전 세션) `Title`/날짜/메타값(회사명·담당자·검토자)은 이미 원본과 정확히 일치하는 기본값으로 만들어져 있어 대부분 override 불필요했음. 다만 스크린샷 대조 결과 두 가지 불일치를 발견해 수정함:

1. **첨부파일명 불일치**: 소송형 마스터 기본값 "소장.docx", 분쟁관련형 마스터 기본값 "내용증명_발송본.docx"는 실제 원본 렌더링 결과("Buptle 파일제목.docx", 공통 플레이스홀더)와 달랐음 — 4개 인스턴스(`4859:421`,`4859:513`,`4859:47965`,`4859:48044`)의 `Link` 텍스트 노드를 "Buptle 파일제목.docx"로 override해 원본과 일치시킴. (계약형 마스터 기본값 "Contract_V2.pdf"는 원본과 이미 일치해 수정 불필요.)
2. **분쟁관련형 코멘트 텍스트**: 마스터 기본값 "홍길동 : 내용증명 발송 완료했습니다."였으나 원본 두 예시(`56653`/`55848`) 모두 "홍길동 : Buptle 용역계약에 대해 아래와 같은 의견을 남깁니다."였음 — 해당 문구로 override.

**⚠️ 남은 열린 항목(신규, 사용자 확인 필요) — 2026-09-28 재조사 결과 미해소로 확인**: 계약형 본문포함 카드(`55984`/`55183`)는 원본 스크린샷상 실제로는 "코멘트" 블록만 노출되고 "계약목적 및 요청사항" 요약·첨부파일 블록은 (자식 텍스트 자체는 visible이어도 상위 컨테이너가 hidden이라) 렌더링되지 않았음. 그러나 승인된 `ResultCard` 4-프로퍼티 모델(`Title`/`첨부파일유무`/`코멘트유무`/variant)에는 "요약 노출 여부"를 제어하는 프로퍼티가 없어 신규 인스턴스는 요약+첨부파일+코멘트가 전부 노출됨 — 원본과 100% 동일한 노출 패턴은 아님. 컴포넌트 구조를 벗어나는 변경이라 이번엔 그대로 두고 기록만 함(속성 추가 여부는 사용자 결정 필요).

**검증**: `get_screenshot`으로 두 프레임 전체 교체 전/후 비교 — 레이아웃·폰트·간격·아이콘·전체 카드 순서 동일, hidden 카드 2개(`55183`,`55775`) 리스트에서 정상적으로 숨겨짐(법무 20건 중 보이는 카드 수 일치), 예외 8개(자문형 6 + 계약형·사건번호 2) 원본 그대로 유지 확인.

### 사용자 수동 수정 확인 (2026-09-28 재조사, 읽기 전용)

위 배치 완료 이후 **사용자가 Figma 파일을 직접 수동으로 추가 수정**했다고 알려옴 — 구체적 작업 경위·의도는 전달받지 못해 미기록. `get_metadata`/`use_figma`(읽기 전용)로 원본 작업 파일과 DS 파일을 재조사해 다음을 확인함(Figma 파일은 이번 조사에서 전혀 수정하지 않음):

**1) `ResultCard` 컴포넌트셋(`231:1107`) 구조 변경 확인됨**:

- `카드유형` variant 프로퍼티가 3종(`계약`/`소송`/`수발신문서`) → **4종**(`계약`/`소송`/`수발신문서`/`자문`)으로 확장됨. `표시상태`(헤더전용/본문포함)와 곱해 **6 variant → 8 variant**로 증가. 신규 variant: `카드유형=자문, 표시상태=헤더전용`(`264:1872`) · `카드유형=자문, 표시상태=본문포함`(`264:1970`).
- 컴포넌트 프로퍼티 목록 자체(Title/첨부파일유무/코멘트유무/카드유형/표시상태 5개)는 변경 없음 — **"요약 노출"을 제어하는 프로퍼티는 추가되지 않음**.
- `계약, 표시상태=본문포함`(`230:952`) variant의 `Body`에 사건번호·버전선택용 **신규 `Container` 섹션**(`261:1786`, "계약서" 라벨 + 드롭다운형 UI)이 추가됨. 이 섹션은 `visible` 바인딩이 없어(`componentPropertyReferences: {}`) **항상 노출** — 이전에 "계약형+사건번호 예외"로 분류됐던 카드(`56086`/`55284`)의 부가 필드가 마스터에 흡수된 것으로 보이나, 그 결과 이 필드가 기존 계약형 본문포함 카드(`55984`/`55183` 등)에도 무조건 함께 노출됨.

**2) 자문형 6개 카드 현재 상태 — 5/6 인스턴스로 교체 확인**:

| 카드               | 구 node-id | 현재 상태                                               | variant                          |
| ------------------ | ---------- | ------------------------------------------------------- | -------------------------------- |
| A 헤더전용         | `56191`    | INSTANCE `4870:46087`                                   | 카드유형=자문, 표시상태=헤더전용 |
| A 본문포함         | `56297`    | INSTANCE `4870:46234`                                   | 카드유형=자문, 표시상태=본문포함 |
| A 본문포함         | `56370`    | INSTANCE `4870:46298`                                   | 카드유형=자문, 표시상태=본문포함 |
| B 헤더전용         | `55389`    | INSTANCE `4870:46951`                                   | 카드유형=자문, 표시상태=헤더전용 |
| B 본문포함(hidden) | `55495`    | **여전히 원본 FRAME** `4345:55495`(미교체, hidden 유지) | —                                |
| B 본문포함         | `55567`    | INSTANCE `4870:46984`                                   | 카드유형=자문, 표시상태=본문포함 |

즉 자문형 6개 중 **5개는 신설된 `카드유형=자문` variant의 인스턴스로 교체 완료**, **1개(`55495`, hidden)만 원본 FRAME으로 남음**.

**3) 계약형·사건번호 예외 2개도 함께 교체됨**(자문형 외 추가 확인 사항): `56086`(A) → INSTANCE `4870:46014`, `55284`(B) → INSTANCE `4870:46861`, 둘 다 `카드유형=계약, 표시상태=본문포함`으로 교체됨. 원본에 없던 위 신규 `Container` 섹션이 마스터에 포함되어 있어 사건번호 표시 요구를 흡수한 것으로 추정되나, 정확한 대응 여부(칩 텍스트가 실제 사건번호로 override됐는지 등)는 이번 조사 범위에서 세부 확인하지 않음.

**4) "요약 노출" 이슈 — 미해소 확인**: `55984`(INSTANCE `4870:45903`)·`55183`(INSTANCE `4859:47929`) 모두 `Body` 하위 `Summary`(`230:970`)가 `componentPropertyReferences: {}`로 항상 visible이고, 실제 인스턴스에서도 `Summary`/`Attach`/`Comment` 프레임이 전부 `visible: true`로 남아있음(코멘트만 노출되던 원본과 여전히 불일치). 즉 이 열린 항목은 사용자의 수동 수정으로 **해소되지 않았고 그대로 열려있음** — 사용자가 언급한 "수정완료"는 자문형 변종 문제(위 1·2)를 가리킨 것으로 보이며, 요약 노출 문제와는 무관한 것으로 판단됨(추측 아님 — 현재 구조 직접 확인).

**갱신된 카드 집계(20개 기준)**: 인스턴스로 교체됨 19개(기존 12개 + 이번에 추가 확인된 7개: 자문형 5 + 계약형·사건번호 2), 원본 FRAME으로 남은 예외 1개(`55495`, 자문형/본문포함/hidden).

## 다음 세션 시작 프롬프트

새 세션에서 아래 중 하나를 그대로 입력한다. (작업 규칙: 조사 → 📋 계획 보고 → 승인 → 실행. 승인 전에는 Figma에 아무것도 만들지 않는다.)

**기본 (P3 완료, 퍼블리시 확인 후 다음 Phase 결정)**

> docs/design-system-rebuild-status.md 읽고 이어서 진행해. P3는 전체 완료(모달 4종·LNB·Button_XL, 2026-09-28)됐지만 퍼블리시는 사용자가 이어서 하기로 한 상태이니 완료 여부부터 확인하고, 다음은 P4(반응형 파일럿 검증)로 갈지 P6(진행중 워크스트림 정합화 — 통합검색 ResultCard는 부분 완료, 계약/자문상세는 미착수) 나머지를 이어갈지 물어봐줘. Modal/Select의 단일선택 모드 부재, Button/Basic XL의 Tertiary/Solid/Negative 색상 미검증 등 이번 배치 열린 항목도 함께 안내해줘.

**상태만 확인하고 싶을 때**

> docs/design-system-rebuild-status.md 읽고 현재 진행 상태와 열린 항목을 요약해줘. 아직 작업은 시작하지 마.

**세션 시작 시 Claude가 먼저 할 일**

1. 이 문서의 "현재 상태 한눈에"(퍼블리시 상태 · 섹션 지도 · 열린 항목 · 결정 로그 · 기술 메모)를 읽는다.
2. 사용자에게 퍼블리시 완료 여부를 확인한다(위 "현재 상태 한눈에" 참조 — 마지막 확인 시점 이후 추가 변경이 있었을 수 있으니 항상 재확인).
3. Figma MCP가 인증되어 있는지 확인한다(안 돼 있으면 인증 링크를 안내). 신규 DS 파일 fileKey는 `jRZzfr9vGsyGKCvT5HS0Gp`, 원본 작업 파일은 `mp4KoPM2jqzU2N9yGVBSrf`(리뷰보드 `2384:1177`).
4. 작업을 마칠 때마다 이 문서에 만든 컴포넌트 node-id, 결정, 열린 항목을 기록한다.

## 참고 — 초기 감사 결과 요약 (P0 이전 원본 상태 → 현재)

| 컴포넌트                            | 초기 감사(원본)                                           | 현재 (신규 DS 파일)                                                                                          |
| ----------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Button, Input                       | ✅ 토큰 준수                                              | 재제작 완료 + 확장(Button 60 variant·`Button/Icon`·`Input/Textarea`). Button 테두리 폭 버그 수정             |
| Header                              | ⚠️ 배경 바인딩, 간격 미바인딩(인스턴스별 오버라이드 가설) | **가설 정정**: 31개 인스턴스 nav 간격은 동일(64). 실제 문제는 루트 665·Left 120 직접 입력 + 내부 그룹 → P2-3 |
| Chip/Label                          | ⚠️ 배지 배경색 하드코딩 가설                              | 원본은 이미 토큰 준수였음. 신규는 Chip 4종 패딩·간격·반경·글자까지 전부 토큰화(P2-2)                         |
| Icon                                | ⚠️ 아이콘마다 별도 컴포넌트로 난립                        | 핵심 세트 통합 완료(44 + 7종 + Close Circle). 잔여는 열린 항목 #6                                            |
| Table                               | ❌ 미존재                                                 | 셀 키트 + Row/Header Row + Pagination 완료(P2-1)                                                             |
| Checkbox / Avatar / Signal Badge    | ❌ 미존재                                                 | 완료(P1). 단 Signal의 `Status`는 신규 파일에 없음(열린 항목 #1)                                              |
| Modal                               | ❌ 미존재                                                 | P3                                                                                                           |
| 색상/스페이싱 변수                  | ✅ 정상                                                   | 이관 완료(P0)                                                                                                |
| Radius, Typography(Text Style 15개) | ⚠️ 팀 라이브러리 미퍼블리시                               | 신규 파일에서 퍼블리시 완료(P0)                                                                              |
| Elevation                           | ❌ Effect Style 전무, 카드마다 인라인 그림자              | Effect Style 8개 신설(P0). 카드 적용은 P2-4                                                                  |

## 참고 — 폐기된 작업

- AGT_TEST_03~08 시안(node 4629:6967, 4629:6968, 안1_단일시트형 스타일)은 "테스트검토 상세" 화면이 미확정인 상태에서 부속 화면부터 만들어 구조가 엉켜 폐기함. 이번 재구축과는 별개 작업이었음(삭제 여부 미정 — 사용자 확인 대기 상태로 남아있었음).

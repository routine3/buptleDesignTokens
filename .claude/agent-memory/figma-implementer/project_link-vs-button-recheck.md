---
name: link-vs-button-recheck
description: "법틀 법무솔루션 2.9" 파일(node 4817-58326 SettingsCard)에서 "수정" 텍스트가 실제로는 두 개의 서로 다른 Figma 컴포넌트(Link / ButtonBasic-Secondary)로 쓰이고 있음을 검증한 결과
metadata:
  type: project
---

Figma 파일 `mp4KoPM2jqzU2N9yGVBSrf` ("1. 법틀 법무솔루션 2.9"), node-id 4817-58326 (SettingsCard) 조사 결과:

- DefinitionList 행 안의 "수정" (node 4817:58337, 4817:58343, 레이어명 "Link - 수정")은 **Link 컴포넌트 세트**(node 4394:41386)의 인스턴스. 변형: `Size=Small, State=Default`, `showIcon=false`(boolean prop으로 아이콘만 끔). 텍스트만 있고 배경/보더/고정 높이 없음, 색상 `brand/primary(#2563EB)`, 폰트 Apple SD Gothic Neo SemiBold 14.035px, Default 상태에서는 밑줄 없음(밑줄은 Hover 상태에서만 등장). 컴포넌트 설명: "Link is an actionable text component with connection to another web pages" — 즉 원래 네비게이션용으로 정의된 컴포넌트인데, 모드 전환 액션("수정")이나 삭제/업로드 같은 비-네비게이션 액션(같은 파일의 reference_card 영역 "자연어로 수정"/"새 버전 업로드"/"삭제", node 4817:58414~58416)에도 광범위하게 재사용되고 있음. 기존 메모 [[project_link-vs-action-button-naming]]에서 지적한 문제가 이 프레임에서도 동일하게 재현됨.
- 같은 프레임의 SectionHeader "Actions" 슬롯에 있는 "수정"/"자연어로 수정하기"/"직접 수정"/"+참고자료 추가" (node 4817:58386, 58370, 58371, 58407, 레이어명 "Button - ...")는 **다른 컴포넌트**를 참조함: master node 4394:42119, variant명 `Kind=Secondary, Size=Small, Status=Default` (컴포넌트 함수명은 `ButtonBasic`). 보더 1px solid `brand/primary`, 배경 투명, 텍스트 `brand/primary`, padding 16px/8px, height 32px, radius `radius/xs`(4px), gap 4px(아이콘 슬롯, 이 인스턴스들은 아이콘 숨김).
  - 이 스펙은 **src/components/ui/Button/Button.tsx의 기존 `kind="secondary" size="small"`과 시각적으로 완전히 일치** (Button.module.css `.secondary` + `.small` 참조: border 1px solid --color-brand-primary, bg transparent, color --color-brand-primary, padding-inline --spacing-16, height 32px). 즉 이쪽은 신규 컴포넌트 불필요, 기존 Button 재사용으로 충분.
  - 주의: 이 "ButtonBasic"(4394:42119) 컴포넌트는 codebase Button.tsx가 매핑된 원본 Figma 세트 "Button / Basic"(node 3354:26920, `00 Components`›`Buttons`)과는 **다른 node 계열**로, Monday.com Vibe 스타일킷(파일 내 Select 컴포넌트 설명에 style.monday.com 문서 링크가 달려있는 것과 동일 계열로 추정)에서 온 것으로 보임. 이름/위치는 다르지만 Kind=Secondary/Small 조합의 비주얼은 기존 Button과 동일하므로 혼선 없이 기존 Button으로 매핑 가능.
- [[project_link-vs-action-button-naming]]에서 "tertiary kind로 흡수 가능할지 검토"라고 적었던 부분은 **이번 조사로 기각**: Button의 `tertiary` kind는 실제로는 배경이 `--color-brand-tertiary`(노란색 계열) 채워진 필 버튼이라 "Link - 수정"의 비주얼(배경/보더 없는 순수 텍스트)과 전혀 다름. "Link - 수정" 스타일을 재현하려면 Button에 새 kind를 추가하거나, 별도의 텍스트 전용 컴포넌트(예: Link 또는 TextButton)를 새로 만들어야 함 — 아직 미결정, 사용자 확인 필요.

**Why:** 사용자가 "수정" 버튼이 Figma에서 "Link"로 되어 있는 게 맞지 않다고 재차 문제 제기하여 get_design_context로 실제 마스터 컴포넌트를 역추적 검증함. 추측이 아니라 실제 node 구조로 확인됨.

**How to apply:** 이 프레임(또는 유사 SettingsCard류) 구현 요청이 들어오면 ① SectionHeader의 보더형 "수정류" 버튼은 바로 `Button(kind="secondary", size="small")` 재사용, ② DefinitionList 행 옆의 텍스트 전용 "수정"은 아직 매핑할 기존 컴포넌트가 없으므로 구현 전 사용자에게 "새 컴포넌트(Link 또는 TextButton)를 만들지, Button에 새 kind를 추가할지" 확인 필요. 관련: [[project_link-vs-action-button-naming]]

/**
 * Figma: Section 1 › Icons › "Icon / Bagic" (node 3353:27091)
 * https://figma.com/design/mp4KoPM2jqzU2N9yGVBSrf?node-id=4301-22510
 *
 * SVG은 에셋 URL이 7일 후 만료되므로 src/assets/icons/*.svg로 다운로드해 커밋했습니다.
 *
 * 원본 소스 이슈:
 * - "Menu"와 "Upload" 레이어명이 각각 2개씩 존재합니다(Figma 원본에서도 두 번째는
 *   조건 분기상 도달 불가능한 죽은 코드였음). 둘 다 다른 자산이라 menu/menu-2,
 *   upload/upload-2로 구분해 전부 보존했습니다 — 실제로 다른 아이콘인지, 중복
 *   업로드 실수인지는 디자이너 확인이 필요합니다.
 * - "generic"은 Figma 레이어명이 그냥 "Icon"이라 의미를 알 수 없어 붙인 이름입니다.
 * - "send-beauty"만 3개 벡터가 겹쳐진 합성 아이콘이라 별도로 렌더링합니다.
 */
import iconAdd from "../assets/icons/add.svg";
import iconAttachment from "../assets/icons/attachment.svg";
import iconAttachment2 from "../assets/icons/attachment-2.svg";
import iconBusiness from "../assets/icons/business.svg";
import iconCalendar from "../assets/icons/calendar.svg";
import iconChange from "../assets/icons/change.svg";
import iconChart from "../assets/icons/chart.svg";
import iconClose from "../assets/icons/close.svg";
import iconCloudUpload from "../assets/icons/cloud-upload.svg";
import iconComplete from "../assets/icons/complete.svg";
import iconContract from "../assets/icons/contract.svg";
import iconCopy from "../assets/icons/copy.svg";
import iconDashboard from "../assets/icons/dashboard.svg";
import iconDelete from "../assets/icons/delete.svg";
import iconDownload from "../assets/icons/download.svg";
import iconEdit from "../assets/icons/edit.svg";
import iconError from "../assets/icons/error.svg";
import iconFile from "../assets/icons/file.svg";
import iconFilter from "../assets/icons/filter.svg";
import iconGeneric from "../assets/icons/generic.svg";
import iconGroup from "../assets/icons/group.svg";
import iconHistory from "../assets/icons/history.svg";
import iconInfo from "../assets/icons/info.svg";
import iconLink from "../assets/icons/link.svg";
import iconLock from "../assets/icons/lock.svg";
import iconMenu from "../assets/icons/menu.svg";
import iconMenu2 from "../assets/icons/menu-2.svg";
import iconMore from "../assets/icons/more.svg";
import iconNoti from "../assets/icons/noti.svg";
import iconOpenNew from "../assets/icons/open-new.svg";
import iconPerson from "../assets/icons/person.svg";
import iconPrint from "../assets/icons/print.svg";
import iconRefresh from "../assets/icons/refresh.svg";
import iconSearch from "../assets/icons/search.svg";
import iconSend from "../assets/icons/send.svg";
import iconSendBeautyG328 from "../assets/icons/send-beauty-g328.svg";
import iconSendBeautyG332 from "../assets/icons/send-beauty-g332.svg";
import iconSendBeautyG336 from "../assets/icons/send-beauty-g336.svg";
import iconSettings from "../assets/icons/settings.svg";
import iconShow from "../assets/icons/show.svg";
import iconSidepanel from "../assets/icons/sidepanel.svg";
import iconStar from "../assets/icons/star.svg";
import iconTime from "../assets/icons/time.svg";
import iconUpload from "../assets/icons/upload.svg";
import iconUpload2 from "../assets/icons/upload-2.svg";
import iconUserLine from "../assets/icons/user-line.svg";

const ICONS = {
  add: iconAdd,
  attachment: iconAttachment,
  "attachment-2": iconAttachment2,
  business: iconBusiness,
  calendar: iconCalendar,
  change: iconChange,
  chart: iconChart,
  close: iconClose,
  "cloud-upload": iconCloudUpload,
  complete: iconComplete,
  contract: iconContract,
  copy: iconCopy,
  dashboard: iconDashboard,
  delete: iconDelete,
  download: iconDownload,
  edit: iconEdit,
  error: iconError,
  file: iconFile,
  filter: iconFilter,
  generic: iconGeneric,
  group: iconGroup,
  history: iconHistory,
  info: iconInfo,
  link: iconLink,
  lock: iconLock,
  menu: iconMenu,
  "menu-2": iconMenu2,
  more: iconMore,
  noti: iconNoti,
  "open-new": iconOpenNew,
  person: iconPerson,
  print: iconPrint,
  refresh: iconRefresh,
  search: iconSearch,
  send: iconSend,
  settings: iconSettings,
  show: iconShow,
  sidepanel: iconSidepanel,
  star: iconStar,
  time: iconTime,
  upload: iconUpload,
  "upload-2": iconUpload2,
  "user-line": iconUserLine,
} as const satisfies Record<string, string>;

export type IconName = keyof typeof ICONS | "send-beauty";

export interface IconProps {
  name: IconName;
  className?: string;
  /** px, 정사각형. 기본값은 Figma 원본과 동일한 24px. */
  size?: number;
}

export function Icon({ name, className, size = 24 }: IconProps) {
  const style = { width: size, height: size };

  if (name === "send-beauty") {
    // Figma 원본이 3개 벡터를 회전/스케일해 겹친 합성 아이콘이라 레이어 구조를 그대로 이식했습니다.
    return (
      <div className={className} style={{ ...style, position: "relative" }}>
        <div className="absolute inset-[7.5%]">
          <img
            alt=""
            className="absolute inset-0 size-full -rotate-180 -scale-x-100"
            src={iconSendBeautyG328}
          />
        </div>
        <div className="absolute inset-[8.35%_8.35%_40.66%_40.67%]">
          <img
            alt=""
            className="absolute inset-0 size-full -rotate-180 -scale-x-100"
            src={iconSendBeautyG332}
          />
        </div>
        <div className="absolute inset-[46.19%_46.19%_20.68%_20.68%]">
          <img
            alt=""
            className="absolute inset-0 size-full -rotate-180 -scale-x-100"
            src={iconSendBeautyG336}
          />
        </div>
      </div>
    );
  }

  return (
    <img
      alt=""
      src={ICONS[name]}
      className={className}
      style={{ ...style, display: "block" }}
    />
  );
}

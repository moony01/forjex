# Figma Design to Next.js Publishing Page Prompt

## 목적

- Figma의 특정 '페이지' 또는 '프레임' 노드를 분석하여, **데이터 로직이 없는 정적인 퍼블리싱 페이지**(`src/app/pub`)로 변환합니다.
- 복잡한 React 로직이나 컴포넌트 분리보다 **시각적 완성도(Pixel Perfect)**와 **빠른 산출물 생성**에 집중합니다.

## 입력 파라미터

- `figmaNodeId`: 변환할 Figma 노드의 ID (또는 URL).
- `siteType`: 페이지 유형 (`site` | `admin`). 경로 결정에 사용됨.
- `pageName`: 페이지 이름 (예: `main-home`, `dashboard`). 경로 생성에 사용됨.

## 출력 경로 구조 (Directory Structure)

모든 결과물은 `src/app/pub` 디렉토리 내에 생성됩니다.

- **공개 사이트 (siteType: site)**: `src/app/pub/(site)/[pageName]/`
- **관리자 (siteType: admin)**: `src/app/pub/(admin)/[pageName]/`

## 명명 규칙 (Naming Conventions)

- **디렉토리**: `kebab-case` (예: `main-home`, `service-detail`)
- **페이지 파일**: `page.tsx` (고정)
- **섹션 파일**: `PascalCase.tsx` (예: `HeroSection.tsx`, `FeatureGrid.tsx`) - _필요한 경우에만_
- **스타일 파일**: `page.module.scss` 또는 `[SectionName].module.scss`
- **이미지 자산**: `kebab-case` (예: `hero-bg.png`)

## 작업 절차 (Workflow)

### 1. 디자인 분석 (Partitioned Analysis Strategy)

- **Step 1**: `get_metadata`로 전체 노드 구조(트리)를 먼저 파악합니다.
- **Step 2**: 최상위 프레임이 너무 커서 정보가 잘릴(Truncated) 경우, **반드시 자식 노드(Section 단위)들의 ID를 리스트업**합니다.
- **Step 3**: 식별된 각 섹션(예: Header, Hero, Footer 등)에 대해 **반복문(Loop)을 통해 개별적으로 `get_design_context`를 호출**하여 상세 코드를 수집합니다.
  - _절대 한 번의 호출로 끝내려 하지 마십시오._
- **Step 4**: 수집된 각 섹션의 정보(레이아웃, 색상, 타이포그래피)를 종합하여 분석합니다.
- **주의**: 클릭 이벤트, 상태 변화 등 인터랙션 로직은 철저히 무시합니다. 오직 '보이는 것'만 가져옵니다.

### 2. 스타일 자산 동기화 (Asset Sync)

- `src/styles/abstracts/_variables.scss`를 확인하여 전역 색상/폰트가 있는지 체크합니다.
- 없다면 해당 파일에 변수 추가를 제안합니다.

### 3. 구조화 (Flat Structure Strategy)

- **기본 원칙**: 가급적 **하나의 `page.tsx` 파일**에 전체 HTML 구조를 작성합니다.
- **컴포넌트 분리 금지**: `Button`, `Card` 같은 작은 단위 컴포넌트를 미리 만들지 마십시오. (이후 개발 단계에서 진행)
- **섹션 분리 허용**: 코드가 너무 길어(500줄 이상) 가독성이 떨어질 경우에만, 큰 레이아웃 단위(Section)로 파일을 분리하여 같은 폴더에 둡니다.
  - 예: `HeroSection.tsx`, `TechSpecs.tsx`
- **헤더/푸터**: 디자인에 포함되어 있다면 `page.tsx` 내에 하드코딩해서라도 포함시킵니다. (나중에 레이아웃으로 이동됨)

### 4. 코드 구현 (Implementation)

- **HTML (JSX)**: Semantic Tag (`<main>`, `<section>`, `<div>`)를 사용하여 구조를 잡습니다.
- **CSS (SCSS Modules)**:
  - **인라인 스타일 금지**: `style={{ ... }}` 절대 사용 금지.
  - **SCSS 파일 생성**: 반드시 `page.module.scss`를 생성하고 `styles.className`으로 연결합니다.
  - **Import 경로**: `src/` 로 시작하는 **절대 경로**를 사용해야 합니다. (예: `@use "src/styles/..."`)
  - Figma의 Auto Layout 속성을 Flexbox/Grid로 정확히 변환합니다.
- **이미지**: 임시 경로(`/images/temp/...`)를 가진 `next/image` 또는 `<div>` 플레이스홀더로 처리합니다.

### 5. 검증 (Validation)

- 생성된 코드가 오류 없이 빌드 가능한지 확인합니다.
- 디자인과 비교하여 누락된 섹션이나 스타일 깨짐이 없는지 검토합니다.

## 결과물 형식

1. `src/app/pub/(site|admin)/[pageName]/page.tsx`
2. `src/app/pub/(site|admin)/[pageName]/page.module.scss`
3. (옵션) 분리된 섹션 파일들 (`Section.tsx`, `Section.module.scss`)

---

## 실행 시 주의사항

- **No Logic**: `useState`, `useEffect`, `onClick` 핸들러를 작성하지 마십시오.
- **No Data Fetching**: API 호출 코드를 작성하지 마십시오. 모든 텍스트/이미지는 하드코딩합니다.
- **Aesthetics First**: 기능보다 '디자인과 똑같이 보이는 것'이 최우선입니다.

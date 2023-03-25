<img width="100" height="100" alt="bank" src="https://user-images.githubusercontent.com/69576865/216808370-58cdc1f2-b173-4ba6-80cb-af48cb47b899.png">

## :mag_right: &nbsp; 프로젝트 소개
> TodoList 앱은 사용자가 일상적인 작업을 관리하고 정리할 수 있게 해주는 간단하면서도 강력한 도구입니다.  
> 기본 CRUD 기능을 통해 사용자는 필요에 따라 작업을 쉽게 생성, 읽기, 업데이트 및 삭제할 수 있습니다. 


### [ 1 ] &nbsp;프로젝트 목적 
- :white_check_mark: &nbsp; 로그인 및 회원가입 기능 구현
- :white_check_mark: &nbsp; 인증 관련 유효성 검사 적용  
- :white_check_mark: &nbsp; 라우팅 경로 설계 및 리디렉션 구현 
- :white_check_mark: &nbsp; API를 사용하여 CRUD 구현
- :white_check_mark: &nbsp; try/catch 블록으로 오류 처리 구현 
- :white_check_mark: &nbsp; 코드 리팩토링으로 코드 품질 및 재사용성 향상
</br>

### [ 2 ] &nbsp;프로젝트 설치 & 실행
#### 터미널에서 다음 명령어를 입력합니다. 

```
$ git clone https://github.com/dong-geon-Lee/todoList-app.git
$ cd todoList-app 
$ code .
$ npm install
$ npm start
```
<br/>


## :link: &nbsp; 배포 링크
https://todo-list-app-ivory-seven.vercel.app
<br/>
<br/>
<br/>
  
## :alarm_clock: &nbsp; 프로젝트 기간
 - 2023.02.03 - 2023.02.05
<br/>

## :seedling: &nbsp; 기술 스택  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=fff)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=fff)
![JAVASCRIPT](https://img.shields.io/badge/JavaScript-343a40?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E)  
![React](https://img.shields.io/badge/React-444444?style=for-the-badge&logo=React)
![styled-components](https://img.shields.io/badge/styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=fff)

### [ 3 ] &nbsp;사용 기술 안내
- <strong>HTML-CSS-JavaScript</strong> </br>
이 기술들은 웹 개발의 기본적인 요소라서 선택하였습니다. HTML은 웹 페이지의 구조와 콘텐츠를 제공합니다. </br>
CSS는 스타일 적용이 가능하며 JavaScript는 웹의 동적 동작을 가능하게 합니다.

- <strong>React</strong> </br>
React는 UI 구성 요소를 쉽고 효율적으로 생성할 수 있는 기능 때문에 선택했습니다. </br>
컴포넌트를 사용하면 한 컴포넌트의 변경 사항이 다른 컴포넌트에 영향을 미치지 않는 모듈식 및 예측 가능한 개발이 가능합니다.     
또한 React의 가상 DOM과 효율적인 렌더링 방법은 고성능 애플리케이션을 제공합니다.

- <strong>Styled-components</strong> </br>
CSS 충돌 방지 기능과 높은 재사용성 때문에 스타일링 라이브러리로 선택했습니다. </br> 
해당 라이브러리는 각 구성 요소 내에서 스타일을 모듈화하여 유지 관리가 더 쉬워지는 장점이 있습니다.   
또한 동적 스타일 및 테마를 사용할 수 있으므로 보다 유연하고 반응이 빠른 디자인이 가능합니다.

<br/>

## :notebook_with_decorative_cover: &nbsp; 프로젝트 구조
<img width="208" alt="스크린샷 2023-03-16 오후 3 26 32" src="https://user-images.githubusercontent.com/69576865/227714305-946dfabb-605d-461a-9d22-de8c696f6c4d.png">

### [ 4 ] &nbsp;폴더의 목적 및 역할 
<h3>api</h3> API와 관련된 모든 코드를 관리하고 백엔드 API에 대한 HTTP 요청을 처리합니다. </br>
api 폴더를 만들고 코드를 구성하면 프로젝트 구조가 보다 모듈화되고 유지 관리가 쉬워집니다. </br>
별도의 API 폴더가 있으면 API 관련 코드를 더 쉽게 테스트하고 디버깅할 수 있으며 향후 API 기능을 더 쉽게 추가하거나 수정할 수 있습니다. 

<h3>components</h3> 모든 컴포넌트 요소의 파일 및 스타일을 관리합니다. </br>    
모듈식 및 재사용 가능한 방식으로 컴포넌트를 구성함으로써 효율적이고 일관성 있는 프로세스를 보장됩니다.

<h3>constants</h3> 응용 프로그램 전체에서 사용되는 고정 값을 관리하는 데 사용됩니다. </br> 
constants 폴더는 이러한 값을 단일 위치에 중앙 집중화하여 코드 가독성과 유지 관리성을 향상시키는 데 도움이 됩니다. </br>

<h3>helpers</h3> 프로젝트 내에서 특정 작업이나 계산을 수행하는 데 사용되는 유틸리티 함수들이 포함되어 있습니다. </br> 
이러한 기능을 기본 코드베이스와 별도로 유지함으로써 helpers 폴더는 보다 체계적이고 모듈화된 개발 접근 방식을 촉진합니다

<h3>pages</h3> 완료된 컴포넌트를 나열하여 전체 사용자 인터페이스를 동적으로 생성하는 데 사용됩니다. </br> 
pages 폴더는 UI를 더 작고 재사용 가능한 구성 요소로 분해하여 개발 프로세스를 단순화하고 각 페이지의 모양과 기능이 일관되도록 합니다. </br> 

<h3>styles</h3> styled-components 글로벌 스타일 폴더로 해당 프로젝트의 글꼴, 색상 및 레이아웃과 같은 모든 전역 스타일을 관리합니다. </br>    
단일 위치에 스타일을 집중하여 일관성을 높이고 프로젝트의 전체적인 형태를 업데이트하는 과정을 단순화합니다. </br>
</br>
</br>

## :eyes: &nbsp; 프로젝트 시연
<details>
<summary>유효성 검사</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/216809680-2c2e4465-c79f-4180-9ece-2f0016aecf3a.gif">
</details>

<details>
<summary>회원가입</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/216809870-cb251a3f-d354-4128-8943-8315c67189e1.gif">
</details>

<details>
<summary>로그인</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/216810032-0b6adaf3-efa1-4401-8f4e-96722c8148ba.gif">
</details>

<details>
<summary>리다이렉트</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/216810657-c71de94e-5726-42a9-8bb7-6cfe46b159c0.gif">
</details>

<details>
<summary>todo 목록 추가</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/216811088-168527ea-1135-473e-9c92-36cb5c100357.gif">
</details>

<details>
<summary>todo 목록 제거</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/216811326-e5a97e98-07ab-422d-b401-6da945ec0430.gif">
</details>

<details>
<summary>todo 목록 수정</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/216811522-614e6649-266c-4df1-ac21-ba8062648677.gif">
</details>
</br>

## :herb: &nbsp; 프로젝트 설명
<a> 블로그 : 노션 </a>
</br>
</br>
</br>

## :bust_in_silhouette: &nbsp; 프로젝트 참여 
Crew | Role | GitHub
----- | ----- | -----
💻 이동건 | Front-end | https://github.com/dong-geon-Lee
<br/>

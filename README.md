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

<h3>api</h3>서버의 REST API와 상호 작용하는 기능이 포함되어 있습니다. </br>
 API와 관련된 모든 코드를 관리하고 백엔드 API에 대한 HTTP 요청을 처리합니다. </br>
api 폴더를 만들고 코드를 구성하면 프로젝트 구조가 보다 모듈화되고 유지 관리가 쉬워집니다. </br>
또한 API 관련 코드를 더 쉽게 테스트하고 디버깅할 수 있으며 향후 API 기능을 더 쉽게 추가하거나 수정할 수 있습니다.

<h3>components</h3> 모든 컴포넌트 요소의 파일 및 스타일을 관리합니다. </br>    
모듈식 및 재사용 가능한 방식으로 컴포넌트를 구성함으로써 효율적이고 일관성 있는 프로세스를 보장됩니다.

<h3>constants</h3> 응용 프로그램 전체에서 사용되는 고정 값을 관리하는 데 사용됩니다. </br> 
constants 폴더는 이러한 값을 나열하여 코드 가독성과 유지 관리성을 향상시키는 데 도움이 됩니다. </br>

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

<h3>[ 5 ] 상세 설명</h3>

<h4>1 ) 로그인 & 회원가입</h4>
<p>Login 및 Register 컴포넌트는 둘 다 signupAPI 및 signInAPI 메서드를 이용하여 서버와 통신합니다.
사용자가 회원가입 버튼을 클릭했을 때 'signupAPI' 함수가 호출되어 사용자의 이메일과 비밀번호로 서버에 POST 요청을 보냅니다.
회원가입이 성공하면 서버는 로컬 스토리지에 저장된 JWT 토큰으로 응답합니다. 이후 로그인에 성공하면 /todo 경로로 이동합니다.</p>

<p>서버와의 비동기 통신을 처리하기 위해 try-catch 및 async-await 문을 사용하여 오류 처리를 수행합니다.
checkSignInUser 함수는 API를 호출하기 전에 사용자 입력의 유효성을 검사하는 데 사용됩니다.
signInAPI 메서드는 사용자의 이메일과 비밀번호로 서버에 게시 요청을 보내는 데 사용됩니다.</p>

<p>응답 상태가 HTTP_OK이면 사용자의 토큰이 로컬 저장소에 저장되고 userData가 빈 이메일과 비밀번호로 초기화됩니다.
그런 다음 사용자는 /todo 경로로 이동합니다. 로그인에 실패하면 로그인 버튼이 비활성화되고 서버에서 오류 메시지가 수신됩니다.
signInAPI 기능은 signupAPI 기능과 유사하지만 대신 서버의 /signin 끝점에 POST 요청을 보냅니다. 요청이 성공하면 함수는 응답 개체를 반환합니다.</p>
</br>

```js
const handleSignIn = async (e) => {
  e.preventDefault();

  try {
    const validation = checkSignInUser(email, password);
    const response = validation && (await signInAPI(email, password));
    if (response.status === HTTP__OK) {
      localStorage.setItem("token", JSON.stringify(response.data));
      setUserData({ email: "", password: "" });
      navigate("/todo");
    }

    setDisabled(true);
  } catch (error) {
    setDisabled(true);
    throw new Error(error.response.data.message);
  }
};
```
</br>

<p>
axios 라이브러리는 /signin 경로를 사용하여 서버에 게시 요청을 만드는 데 사용됩니다. </br>
요청이 성공하면 응답이 handleSignIn 함수로 전달됩니다.
요청이 실패하면 오류가 handleSignIn 함수로 전달됩니다. </br>
이러한 기능과 방법을 사용하여 React 애플리케이션은 서버와 사용자 인증을 수행하고 사용자를 /todo 페이지로 이동할 수 있습니다. 
</p>

```js
export const signInAPI = async (email, password) => {
  try {
    const response = await axios.post(
      `${AUTH_API_URL}/signin`,
      { email, password },
      headers
    );
    return response;
  } catch (error) {
    throw error;
  }
};
```

</br>

<h4>2 ) 할 일 목록</h4>
<p>TodoList 컴포넌트는 사용자가 만든 모든 작업을 보여줍니다. </br>
해당 컴포넌트는 getTodosAPI, createTodoAPI, updateTodoAPI 및 deleteTodoAPI 기능을 사용하여 서버와 통신합니다.</p>

<h5>1. getTodosAPI</h5>
<p>컴포넌트가 마운트될 때 getTodosAPI 함수가 호출되었고 JWT 토큰과 함께 서버에 GET 요청을 보냈습니다. </br>
서버가 응답하여 할 일 목록들이 화면에 표시됩니다.
getTodosAPI 함수는 인증 토큰을 헤더로 사용하여 GET 요청을 서버의 /todos 끝점으로 보냅니다. </br>
서버는 인증된 사용자와 관련된 할 일 목록으로 응답합니다.</p>

```js
export const getTodosAPI = async (token) => {
  try {
    const response = await axios.get(TODOS_API_URL, config(token));
    return response.data;
  } catch (error) {
    throw error;
  }
};
```

</br>

<h5>2. createTodoAPI</h5>
<p>사용자가 목록에 새 작업을 추가했을 때 createTodoAPI 함수가 호출되었습니다.
함수는 새 작업 및 JWT 토큰과 함께 서버에 POST 요청을 보냈습니다. </br>
작업이 성공적으로 추가되면 서버는 새 작업으로 응답한 다음 목록에 추가했습니다.</p>
<p>createTodoAPI 함수는 새로운 todo 항목을 데이터로, 인증 토큰을 헤더로 사용하여 POST 요청을 서버의 /todos 엔드포인트로 보냅니다. </br>
요청이 성공하면 함수는 새로 생성된 todo 항목을 반환합니다.</p>

```js
const createTodo = async () => {
  try {
    const data = await createTodoAPI(todo, token);
    setTodoLists((prevState) => [...prevState, data]);
    setTodo("");
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
```

</br>

<h5>3. updateTodoAPI</h5>
<p>사용자가 목록에서 작업을 편집할 때 updateTodoAPI 함수가 호출되었습니다.
함수는 편집된 작업, 작업 ID, isCompleted 값 및 JWT 토큰과 함께 서버에 PUT 요청을 보냈습니다.
작업이 성공적으로 편집되면 서버는 업데이트된 작업으로 응답하고 화면에 표시됩니다.</p>

<p>updateTodoAPI 함수는 업데이트된 할일 항목과 인증 토큰을 데이터로 하여 PUT 요청을 서버의 /todos/:id 엔드포인트로 보냅니다. </br>
요청이 성공하면 함수는 애플리케이션의 로컬 상태에서 할 일 항목을 업데이트합니다.</p>

```js
export const updateTodoAPI = async (id, editTodo, isCompleted, token) => {
  try {
    await axios.put(
      `${TODOS_API_URL}/${id}`,
      { todo: editTodo, isCompleted: !isCompleted },
      config(token)
    );
  } catch (error) {
    throw error;
  }
};
```

</br>

<h5>4. deleteTodoAPI</h5>
<p>사용자가 목록에서 작업을 삭제했을 때 deleteTodoAPI 함수가 호출되었습니다.
함수는 작업 ID와 JWT 토큰을 사용하여 서버에 DELETE 요청을 보냈습니다. 작업이 성공적으로 삭제되면 목록에서 제거됩니다.</p>

<p>deleteTodoAPI 함수는 인증 토큰을 헤더로 사용하여 DELETE 요청을 서버의 /todos/:id 끝점으로 보냅니다. </br>
요청이 성공하면 함수는 애플리케이션의 로컬 상태에서 todo 항목을 삭제합니다.</p>

```js
export const deleteTodoAPI = async (id, token) => {
  try {
    await axios.delete(`${TODOS_API_URL}/${id}`, config(token));
  } catch (error) {
    throw error;
  }
};
```

<h4>3 ) 배운점 & 느낀점</h4>

```js
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="todo" element={<TodoList />} />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
};
```

</br>
</br>
</br>

## :bust_in_silhouette: &nbsp; 프로젝트 참여

| Crew      | Role      | GitHub                           |
| --------- | --------- | -------------------------------- |
| 💻 이동건 | Front-end | https://github.com/dong-geon-Lee |

<br/>

# Worldwide Weather Project 

# 👩‍👧‍👦 Team Members

| 오다솔 | 관광지별 position 구현 / 클릭시 팝업창 구현 / 마우스 효과 구현 |
| --- | --- |
| 임혜창 | Footer 구조 / FAQ, About html 구현 / 상단 메뉴바 구현 |
| 장수진 | Header 구조 / 로고 및 아이콘 / 상단 검색바 구현 / FAQ, About 구조 수정 |




# ☀️ What for?

## 유명한 관광지의 날씨 정보, 뉴스, 관광지 관련 뉴스, 코로나 확진자 추이 등을 알려주는 사이트

# ⚡ Functions

## 상단바 관광지 별 검색

- HTML : select tag
- js : querySelector를 이용해 select option의 value를 가져오고 각 value에 맞게 a tag의 href를 바꿈

## 상단바 메뉴 버튼

- click 시 요약 페이지로 넘어갈 수 있음
- 실제 사이트에 있는 기능

## 국기 hover 기능 & click 시 팝업창 뜨기

- css : 국기에 label tag를 달고 바로 옆에 checkbox 생성 (checkbox는 display: none 으로 보이지 않음)
    
    → label click 시 팝업창 뜨도록 설정
    
    → 한번 더 click 시 팝업창 사라짐
    
    ```css
    #label_berlin { display: none; }
    #label_berlin:checked ~ .btn_berlin { display: block; } 
    .btn_berlin { 
        display: none;
        position: absolute; 
        padding: 10px 10px 10px 10px;     
        background: rgba(219, 226, 213, 0.2);
        border-radius: 20px;
        border: #1a3829 solid 2px;
        font-size: 16px;
        text-align: center;
        width: 200px;    
    }
    
    .berlin:after {
    	display: block;
    	position: absolute;
    	top: -30px; 
    	left: 35px;
        content: '';
        border: 1px solid rgb(187, 187, 187);
    	border-width: 0 20px 30px 30px;
    	border-color: #1a3829 transparent;       
    }
    ```
    
- css : 마우스 hover 시 이미지 전체에서 그림자가 뜨게 함
    
    ```css
    .img_berlin:hover {
      border: 2px solid;
      border-image: linear-gradient(to right, #ece255, #e91111aa, #0d0d0eaa);
      border-image-slice: 1;
      filter: drop-shadow(12px 12px 12px #553145);
    }
    ```
    
    
    # 🌪️ Issues

## querSelector와 getElementsByClassName

- 팝업창 정보 구현시 발생
- js에서 querySelector로 가져온 변수는 string, object 이지만 getElementsByClassName을 사용해 가져온 변수는 HttpCollection
    - select options와 같이 여러개를 가져오는 것이 아니고 1개의 tag만 가져오는 경우에는 querySelector 사용이 용이
    - HttpCollection은 index를 넣어 array 처럼 사용 가능

```css
const berlin = document.getElementsByClassName('berlin'); -> HttpCollection [berlin_wea, berlin_covid, berlin_news..]
let berlin_text = document.querySelector('.berlin_text'); -> 'text'
```

## Footer

- backgroud image가 footer까지 덮이게 하고 싶었으나 방법을 찾을 수 없어서 footer를 body tag 안에 넣음
    
    → footer의 hr line이 좁혀지는 현상 발생 / 원인을 찾을 수 없었음...
    
- 그 외 자세한 css 원리들을 알지 못하고 동작하기만 하면 넘어감

## Position

- 팝업창이 뜨는 위치를 position: relative를 이용해서 px로 이동했으나 다른 컴퓨터에서 깨짐
    
    → %로 구현 → 다시 깨짐
    
- 고정된 position을 사용하는 방법을 배우거나 국기 icon에 항상 종속되는 팝업창 기능을 구글링해서 개선할 것

## 팝업창 닫기 기능

- 팝업창을 닫으려면 국기를 다시 눌러야 하는데 국기가 가려지는 경우 닫을 수 없음
- 빈 공간을 눌렀을 때 팝업창이 닫히는 기능을 구현해서 개선할 것

## 메뉴바 구현

- 원하는대로 요약 메뉴바를 바로 구현하지 못하고 다른 페이지로 넘어가서 구현됨

# 🌟 Details

## FAQ, About page design details

- footer 구조 통일
- Header logo icon 통일
- 색감 통일

## Image effects

- 프로필에 자주 사용되는 효과를 입혀봄 → 실제 사이트와 비슷하게 느껴짐

## Button effects

- 국가 색과 맞춰서 효과를 넣음

## Self-made Template

- 컬러풀한 세계지도를 바탕으로 전체적인 디자인은 컬러풀하게 맞춤




# 실제 화면 ...

< 메인 화면 -1 >
![image](https://user-images.githubusercontent.com/91539439/155679480-e9543b0a-a4f5-4f9d-ae35-96c317bb5881.png)

< 메인 화면 -2 >
![image](https://user-images.githubusercontent.com/91539439/155679694-83217967-01f6-4cc4-8cd1-fb4458905eeb.png)

< FAQ 화면 >
![image](https://user-images.githubusercontent.com/91539439/155679790-d0044cb8-62b2-42b1-894c-bd7e48589b96.png)

< 팀원 소개 >
![image](https://user-images.githubusercontent.com/91539439/155679984-7a673303-c7db-441e-93a8-82f6a1292e8f.png)

< 메뉴 요약 선택창 >
![image](https://user-images.githubusercontent.com/91539439/155680098-b8f58eb1-accb-4267-a818-2a058671f392.png)


# Worldwide Weather Project 

# ๐ฉโ๐งโ๐ฆ Team Members

| ์ค๋ค์ | ๊ด๊ด์ง๋ณ position ๊ตฌํ / ํด๋ฆญ์ ํ์์ฐฝ ๊ตฌํ / ๋ง์ฐ์ค ํจ๊ณผ ๊ตฌํ |
| --- | --- |
| ์ํ์ฐฝ | Footer ๊ตฌ์กฐ / FAQ, About html ๊ตฌํ / ์๋จ ๋ฉ๋ด๋ฐ ๊ตฌํ |
| ์ฅ์์ง | Header ๊ตฌ์กฐ / ๋ก๊ณ  ๋ฐ ์์ด์ฝ / ์๋จ ๊ฒ์๋ฐ ๊ตฌํ / FAQ, About ๊ตฌ์กฐ ์์  |




# โ๏ธ What for?

## ์ ๋ชํ ๊ด๊ด์ง์ ๋ ์จ ์ ๋ณด, ๋ด์ค, ๊ด๊ด์ง ๊ด๋ จ ๋ด์ค, ์ฝ๋ก๋ ํ์ง์ ์ถ์ด ๋ฑ์ ์๋ ค์ฃผ๋ ์ฌ์ดํธ

# โก Functions

## ์๋จ๋ฐ ๊ด๊ด์ง ๋ณ ๊ฒ์

- HTML : select tag
- js : querySelector๋ฅผ ์ด์ฉํด select option์ value๋ฅผ ๊ฐ์ ธ์ค๊ณ  ๊ฐ value์ ๋ง๊ฒ a tag์ href๋ฅผ ๋ฐ๊ฟ

## ์๋จ๋ฐ ๋ฉ๋ด ๋ฒํผ

- click ์ ์์ฝ ํ์ด์ง๋ก ๋์ด๊ฐ ์ ์์
- ์ค์  ์ฌ์ดํธ์ ์๋ ๊ธฐ๋ฅ

## ๊ตญ๊ธฐ hover ๊ธฐ๋ฅ & click ์ ํ์์ฐฝ ๋จ๊ธฐ

- css : ๊ตญ๊ธฐ์ label tag๋ฅผ ๋ฌ๊ณ  ๋ฐ๋ก ์์ checkbox ์์ฑ (checkbox๋ display: none ์ผ๋ก ๋ณด์ด์ง ์์)
    
    โ label click ์ ํ์์ฐฝ ๋จ๋๋ก ์ค์ 
    
    โ ํ๋ฒ ๋ click ์ ํ์์ฐฝ ์ฌ๋ผ์ง
    
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
    
- css : ๋ง์ฐ์ค hover ์ ์ด๋ฏธ์ง ์ ์ฒด์์ ๊ทธ๋ฆผ์๊ฐ ๋จ๊ฒ ํจ
    
    ```css
    .img_berlin:hover {
      border: 2px solid;
      border-image: linear-gradient(to right, #ece255, #e91111aa, #0d0d0eaa);
      border-image-slice: 1;
      filter: drop-shadow(12px 12px 12px #553145);
    }
    ```
    
    
    # ๐ช๏ธ Issues

## querSelector์ getElementsByClassName

- ํ์์ฐฝ ์ ๋ณด ๊ตฌํ์ ๋ฐ์
- js์์ querySelector๋ก ๊ฐ์ ธ์จ ๋ณ์๋ string, object ์ด์ง๋ง getElementsByClassName์ ์ฌ์ฉํด ๊ฐ์ ธ์จ ๋ณ์๋ HttpCollection
    - select options์ ๊ฐ์ด ์ฌ๋ฌ๊ฐ๋ฅผ ๊ฐ์ ธ์ค๋ ๊ฒ์ด ์๋๊ณ  1๊ฐ์ tag๋ง ๊ฐ์ ธ์ค๋ ๊ฒฝ์ฐ์๋ querySelector ์ฌ์ฉ์ด ์ฉ์ด
    - HttpCollection์ index๋ฅผ ๋ฃ์ด array ์ฒ๋ผ ์ฌ์ฉ ๊ฐ๋ฅ

```css
const berlin = document.getElementsByClassName('berlin'); -> HttpCollection [berlin_wea, berlin_covid, berlin_news..]
let berlin_text = document.querySelector('.berlin_text'); -> 'text'
```

## Footer

- backgroud image๊ฐ footer๊น์ง ๋ฎ์ด๊ฒ ํ๊ณ  ์ถ์์ผ๋ ๋ฐฉ๋ฒ์ ์ฐพ์ ์ ์์ด์ footer๋ฅผ body tag ์์ ๋ฃ์
    
    โ footer์ hr line์ด ์ขํ์ง๋ ํ์ ๋ฐ์ / ์์ธ์ ์ฐพ์ ์ ์์์...
    
- ๊ทธ ์ธ ์์ธํ css ์๋ฆฌ๋ค์ ์์ง ๋ชปํ๊ณ  ๋์ํ๊ธฐ๋ง ํ๋ฉด ๋์ด๊ฐ

## Position

- ํ์์ฐฝ์ด ๋จ๋ ์์น๋ฅผ position: relative๋ฅผ ์ด์ฉํด์ px๋ก ์ด๋ํ์ผ๋ ๋ค๋ฅธ ์ปดํจํฐ์์ ๊นจ์ง
    
    โ %๋ก ๊ตฌํ โ ๋ค์ ๊นจ์ง
    
- ๊ณ ์ ๋ position์ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ ๋ฐฐ์ฐ๊ฑฐ๋ ๊ตญ๊ธฐ icon์ ํญ์ ์ข์๋๋ ํ์์ฐฝ ๊ธฐ๋ฅ์ ๊ตฌ๊ธ๋งํด์ ๊ฐ์ ํ  ๊ฒ

## ํ์์ฐฝ ๋ซ๊ธฐ ๊ธฐ๋ฅ

- ํ์์ฐฝ์ ๋ซ์ผ๋ ค๋ฉด ๊ตญ๊ธฐ๋ฅผ ๋ค์ ๋๋ฌ์ผ ํ๋๋ฐ ๊ตญ๊ธฐ๊ฐ ๊ฐ๋ ค์ง๋ ๊ฒฝ์ฐ ๋ซ์ ์ ์์
- ๋น ๊ณต๊ฐ์ ๋๋ ์ ๋ ํ์์ฐฝ์ด ๋ซํ๋ ๊ธฐ๋ฅ์ ๊ตฌํํด์ ๊ฐ์ ํ  ๊ฒ

## ๋ฉ๋ด๋ฐ ๊ตฌํ

- ์ํ๋๋๋ก ์์ฝ ๋ฉ๋ด๋ฐ๋ฅผ ๋ฐ๋ก ๊ตฌํํ์ง ๋ชปํ๊ณ  ๋ค๋ฅธ ํ์ด์ง๋ก ๋์ด๊ฐ์ ๊ตฌํ๋จ

# ๐ Details

## FAQ, About page design details

- footer ๊ตฌ์กฐ ํต์ผ
- Header logo icon ํต์ผ
- ์๊ฐ ํต์ผ

## Image effects

- ํ๋กํ์ ์์ฃผ ์ฌ์ฉ๋๋ ํจ๊ณผ๋ฅผ ์ํ๋ด โ ์ค์  ์ฌ์ดํธ์ ๋น์ทํ๊ฒ ๋๊ปด์ง

## Button effects

- ๊ตญ๊ฐ ์๊ณผ ๋ง์ถฐ์ ํจ๊ณผ๋ฅผ ๋ฃ์

## Self-made Template

- ์ปฌ๋ฌํํ ์ธ๊ณ์ง๋๋ฅผ ๋ฐํ์ผ๋ก ์ ์ฒด์ ์ธ ๋์์ธ์ ์ปฌ๋ฌํํ๊ฒ ๋ง์ถค




# ์ค์  ํ๋ฉด ...

< ๋ฉ์ธ ํ๋ฉด -1 >
![image](https://user-images.githubusercontent.com/91539439/155679480-e9543b0a-a4f5-4f9d-ae35-96c317bb5881.png)

< ๋ฉ์ธ ํ๋ฉด -2 >
![image](https://user-images.githubusercontent.com/91539439/155679694-83217967-01f6-4cc4-8cd1-fb4458905eeb.png)

< FAQ ํ๋ฉด >
![image](https://user-images.githubusercontent.com/91539439/155679790-d0044cb8-62b2-42b1-894c-bd7e48589b96.png)

< ํ์ ์๊ฐ >
![image](https://user-images.githubusercontent.com/91539439/155679984-7a673303-c7db-441e-93a8-82f6a1292e8f.png)

< ๋ฉ๋ด ์์ฝ ์ ํ์ฐฝ >
![image](https://user-images.githubusercontent.com/91539439/155680098-b8f58eb1-accb-4267-a818-2a058671f392.png)


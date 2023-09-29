/* eslint-disable react/no-unescaped-entities */
import ImageGallery from './ImageGallery'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function About () {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">hey, I'm Daniel Cerverizzo 👋</h1>
      <p className="prose prose-neutral dark:prose-invert">

        I'm an experienced Software Development Engineer with over 5 years of experience in creating user interfaces and enhancing web apps.
        Currently, I work as a Software Development Engineer at

        <a href="https://cobrefacil.com.br/" target="_blank" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline" rel="noreferrer">

          <svg width="70" height="12" className="text-js-primary mr-1" version="1.0" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 890.000000 187.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,187.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M665 1845 c-163 -25 -239 -45 -320 -84 -157 -77 -251 -205 -291 -395
-61 -290 -59 -623 6 -889 44 -176 151 -313 297 -379 199 -89 656 -115 953 -54
222 46 355 136 432 291 80 160 125 511 99 770 -25 243 -63 380 -132 485 -103
153 -249 221 -559 260 -114 14 -374 11 -485 -5z m-204 -564 l24 -19 3 -326 3
-326 -25 -25 c-32 -32 -70 -32 -101 0 l-25 24 0 321 0 321 25 24 c29 30 64 32
96 6z m343 -2 l26 -20 0 -327 c0 -321 0 -326 -22 -349 -27 -28 -67 -30 -96 -3
-22 21 -22 24 -22 347 0 322 0 327 22 350 27 29 57 29 92 2z m351 -4 l25 -24
0 -321 0 -321 -25 -24 c-31 -32 -69 -32 -100 0 l-25 24 0 321 0 321 25 24 c13
14 36 25 50 25 14 0 37 -11 50 -25z m342 3 l23 -21 0 -329 c0 -315 -1 -329
-20 -348 -26 -26 -68 -25 -97 2 l-23 21 0 328 0 328 26 20 c34 27 62 27 91 -1z"/>
              <path d="M3850 1100 l0 -530 65 0 65 0 0 53 c0 28 5 59 10 67 6 10 10 11 10 3
0 -21 71 -93 114 -116 64 -34 183 -31 258 6 100 49 161 143 180 277 37 261
-116 465 -336 448 -75 -6 -130 -33 -179 -87 l-37 -41 0 225 0 225 -75 0 -75 0
0 -530z m415 79 c53 -15 108 -73 126 -135 8 -27 14 -84 13 -126 -1 -136 -66
-228 -171 -244 -131 -19 -222 72 -231 232 -5 98 13 164 61 218 50 58 122 77
202 55z"/>
              <path d="M6150 1621 c-77 -24 -141 -84 -159 -148 -6 -21 -11 -68 -11 -105 l0
-68 -60 0 -60 0 0 -75 0 -75 60 0 60 0 0 -290 0 -290 95 0 95 0 0 290 0 290
68 0 67 0 38 70 c20 38 37 72 37 75 0 3 -49 5 -110 5 l-110 0 1 43 c1 102 49
152 139 144 25 -3 52 -8 61 -11 12 -5 18 5 27 55 6 34 9 66 6 70 -15 25 -183
38 -244 20z"/>
              <path d="M6715 1528 c-21 -51 -40 -99 -42 -106 -4 -10 9 -12 58 -10 l63 3 29
50 c16 28 43 74 59 103 l30 52 -80 0 -80 0 -37 -92z"/>
              <path d="M7953 1605 c-38 -16 -53 -42 -53 -89 0 -80 41 -112 136 -104 37 3 62
11 75 24 26 27 35 86 19 125 -22 53 -107 75 -177 44z"/>
              <path d="M8210 1180 c0 -281 4 -457 11 -490 20 -93 86 -140 194 -140 39 0 123
19 129 29 2 3 7 32 11 65 l8 58 -50 -7 c-41 -5 -53 -3 -76 15 l-27 21 0 445 0
444 -100 0 -100 0 0 -440z"/>
              <path d="M2519 1294 c-68 -21 -140 -72 -177 -128 -49 -74 -65 -141 -60 -260 3
-91 7 -110 36 -168 37 -76 83 -120 162 -157 48 -22 68 -26 156 -26 96 0 104 2
169 35 71 36 126 96 140 151 6 25 3 28 -56 48 -34 11 -63 20 -64 18 -1 -1 -13
-23 -28 -49 -72 -124 -263 -116 -338 15 -21 37 -24 54 -24 152 0 96 3 116 24
158 33 67 85 100 165 105 79 4 120 -17 161 -84 l30 -50 60 24 c33 13 63 27 67
31 15 14 -57 116 -104 148 -78 52 -218 68 -319 37z"/>
              <path d="M3305 1301 c-107 -28 -181 -90 -229 -190 -29 -62 -31 -73 -31 -181 0
-106 2 -120 29 -178 74 -160 258 -238 437 -186 108 32 170 87 221 199 20 43
23 66 23 165 0 108 -2 119 -31 181 -62 130 -154 189 -303 195 -47 2 -99 0
-116 -5z m178 -125 c168 -70 168 -422 0 -492 -42 -18 -124 -18 -166 0 -167 69
-168 420 -2 492 39 17 127 18 168 0z"/>
              <path d="M4938 1301 c-51 -17 -98 -52 -122 -93 l-24 -41 -6 34 c-3 19 -7 48
-8 64 -3 29 -4 30 -65 33 l-63 3 0 -366 0 -365 75 0 75 0 0 223 c0 220 0 224
26 275 40 81 135 126 217 104 l35 -10 10 67 c5 36 8 68 5 71 -8 8 -128 9 -155
1z"/>
              <path d="M5363 1296 c-157 -51 -243 -180 -243 -365 0 -245 155 -394 391 -378
117 8 227 65 265 139 l15 29 -57 25 -57 25 -41 -39 c-51 -49 -101 -66 -176
-59 -79 7 -130 41 -164 108 -14 29 -26 66 -26 81 l0 28 265 0 264 0 7 38 c9
48 -10 162 -36 212 -56 109 -145 162 -279 167 -54 2 -102 -2 -128 -11z m221
-139 c41 -32 61 -66 71 -120 l7 -37 -196 0 c-108 0 -196 4 -196 9 0 21 25 79
48 110 56 75 191 94 266 38z"/>
              <path d="M6585 1290 c-35 -11 -79 -35 -103 -56 -44 -38 -87 -107 -79 -128 3
-7 31 -19 63 -28 33 -9 66 -20 75 -23 13 -5 23 5 40 34 42 75 143 103 210 58
41 -28 59 -60 59 -109 0 -35 -1 -37 -47 -46 -27 -6 -96 -20 -155 -32 -185 -39
-248 -94 -248 -217 0 -79 29 -129 95 -162 98 -51 277 -28 345 44 l22 24 37
-39 c23 -24 52 -42 81 -50 49 -13 125 -9 143 9 5 5 12 35 15 66 l4 55 -28 -6
c-18 -3 -37 0 -49 10 -19 13 -20 29 -25 228 -5 196 -7 216 -27 255 -13 23 -38
54 -58 68 -82 63 -249 83 -370 45z m265 -457 c0 -91 -59 -143 -159 -143 -42 0
-57 5 -76 25 -54 53 -17 115 81 135 32 7 75 16 94 20 60 14 60 13 60 -37z"/>
              <path d="M7407 1299 c-106 -25 -198 -105 -238 -208 -18 -45 -23 -76 -23 -161
0 -135 24 -201 98 -276 75 -74 141 -98 276 -98 93 -1 111 2 160 25 76 36 114
70 144 132 l26 52 -82 27 c-45 16 -85 28 -88 28 -3 0 -15 -19 -28 -43 -29 -56
-71 -80 -136 -80 -119 0 -176 76 -176 233 0 156 57 232 175 234 64 0 106 -27
131 -87 l18 -43 85 30 c46 17 86 36 88 41 2 6 -12 35 -29 65 -55 92 -162 141
-301 139 -34 -1 -79 -5 -100 -10z"/>
              <path d="M7920 935 l0 -365 95 0 95 0 0 365 0 365 -95 0 -95 0 0 -365z" />
            </g>
          </svg>
        </a>
        focusing on UX/UI building with

        {/* SVG Icons */}

        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline" rel="noreferrer">
          <svg width="14" height="12" className="text-js-primary mr-1" viewBox="0 0 128 128">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
            <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
          </svg>
          Javascript
        </a>

        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline" rel="noreferrer">
          <svg width="14" height="12" className="text-css-primary mr-1" viewBox="0 0 128 128">
            <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path>
            <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path>
            <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path>
            <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path>
            <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path>
            <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
          </svg>
          CSS3
        </a>

        <a href="https://php.net" target="_blank" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline" rel="noreferrer">
          <svg width="20" height="12" className="text-php-primary mr-1" viewBox="0 0 128 128">
            <defs><path id="php-original-a" d="M64.026 96.076c33.676 0 60.976-14.361 60.976-32.076s-27.3-32.075-60.976-32.075S3.051 46.285 3.051 64s27.3 32.076 60.975 32.076"></path></defs><defs><path id="php-original-c" d="M2.998 31.924h122.004v64.1H2.998z"></path></defs><clipPath id="php-original-b"></clipPath><clipPath id="php-original-d" clipPath="url(#php-original-b)"></clipPath><g clipPath="url(#php-original-d)"><defs><path id="php-original-e" d="M2.998 31.924h122.004v64.1H2.998z"></path></defs><clipPath id="php-original-f"></clipPath><g clipPath="url(#php-original-f)"><image overflow="visible" width="1160" height="609" xlinkHref="data:image/jpeg;base64,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 Hnfonne2dsuvF1nS2yxbKurKXWdRdZ0tssaspqyy6sprWdRdZ0assutZ1F1nRrWdS61nRrWdRrWd S63jZrNkYzrNZzrNmc6yZzrNZzrNZliZzrNTOsmZZZnOskzrNTOs2TOskllZliZlhJZWZYkllZli SWVmWJJZYEoS0KEBKlkAoRAqWQESWKlkJYJZEliyWElkSWGZZGc6yuc6yZxvEYzrKgAO/wDQO/nc QmPOvRfOts9WXXi6zV1ZYtlXVlLrOous1dWWNWU1ZZdWU1rNjWs6LrOpdazTWs6jWs2XesaNazY/ S40u7mxqSFzcjFzZJckzc1M6zWZcpM6zWZYZlzZM6zUzrJM6zZM6ySXNSWJmWEzrNSWJM6zUliTO s1JYkllgShLQoQEqWQChECpZARJYqWQlglkSWLJYSWRJcklzLM6yZzrJjOsxjOsqAA7/ANA7+dxC Y869F862z1c614tlW6zotljVzpbZY1ZV1c6i6zous6i6zpdXOo1c6NazZdazo1c6jWsal1rGjdzY 3rFN3FXTIuURlBm5qRCZubGbDMuamdZqZsSZsrMsMyyzMsJmypnWUksJmypLEmbKksSZsqSxJLLA lCWhQgJUsgFCIFSyBISxUshLBLIksWSwksiZ1kmdZlmdZM51kxnWIznWVAAd/wCgd/O4hMedei+d bZ2y7caudRbKurnUWyrqyxdZ0Wyy6spq51GrnS6udRq50a1jUutY0bubGtY0bubLrWKbuKbZsVBZ IWSUiDNzUiJJc1IhM2WTNhM2VM2EzZZM6ySWVmWJM6zUlhM2JJZUzYkllSWJIWBKEtChASpZAKEQ SpYJZCWKlkJYQRJYslhJZEzYTOsyzNhnOsmMbxGc6yoADv8A0Dv53EJjzr0XzrbO2Xbi2WNWVbZY 1c6W6zY1c6NXNXWs2NXOjVzqXVzo1c6jVzTdzZd3NN3NjWsU3cpds01cU0zDUgskLJKREkQZuaZu RmyyZsJmypmxJEqS5GbKkRJLKmbCSxJnWaksSSypmxILAlCVSUAJYIBUsgJUsEshLFSyECSyEsWS yJnWSSwzLJc51kmNZM41mMSxQAHf+gd/O4hMec+jec7Z3Wbtxq51Fsq6ubGrKurmmrLGrnS3WbGr nRq5sbuautZsa1jRq5q7ubG7im7ixu4ptku2UaZGpJWpIiIWSCJTKDNlkiEiVJcjNlkiElhM2WSX JJZUlyjNlSWEiJJZZJYQWBKssoShALBASpYBLAJZCWKlkQElkILJZEzYSXJJZLnOsmc6yYzrEZli gAO/9A7+dxCY859G842z1ZduLZYus1dWWLrNXVzTVljVzpbZY1c01rNNXOpdXNN3Go1c01rFl3cU 3cU2zY0g0yNMjUgsgskqyQuUESxEJEpmwkRJLmmbCS5pmxJLkZsqSxJEqSxJLKkuUZsAAFiWiUJQ IJQhLAJYBCIFgiAkslksESJLCZ1kmdZlzLkmNZMZ1mXAAAHf+gd/O4hJ8Q65U6igoqgBQUFEUCiq CgoKQoAUFABQAAAIAEAgAQEFQEBAQIgICFICABAkBBSAAEAoCkQAAKAEQAAEAEQALAQEBBEgIEgQ AAD64fTB/9oACAECAAEFAP8AljGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGR kZGMYxjPu/8AnqV/z1K/46lf8dSv+OpX/HUr/jqV2fUrs+pXZ9Suz6ldl1K7LqV2XUrsupXZdSux 6ldj1K7HqV2PUrsepXY9Sux6ldj1K7HqV2PUrsepXY9Sux6ldj1K7HqV2PUrsepXY9Sux6ldj1K7 HqV/z1K//9oACAEDAAEFAL9HWta1rWta1rWta1rWta1rW/iL1KvUq9Sr1KvUr/rqV/11K/66lf8A XUr/AK6lf9dSv++pX/fUr/vqV/31K/76ldp1K7TqV2nUrtOpXadSu06ldp1K7TqV2nUrtOpXadSu 06ldp1K7TqV2nUrtOpXadSu06ldp1K7TqV2nUr/rqV//2gAIAQEAAQUA7S2dn675u9d83eu+bvXf N3rvm713zd655u9d83euebvXPN3rnm71zzd655u9c82euebPXPNnrnmz1zzZ655s9c82et+bPXPN nrnmz1zzZ635s9b82et+bPW/Nnrfmz1vzZ635s9b82et+bPW/Nnrfmz1vzZ635s9b82et+bPW/Nn rfmz1vzZ635s9b82et+bPW/Nnrfmz1vzZ635s9b82et+bPW/Nnrfmz1vzZ635s9b82et+bPW/Nnr fmz1vzZ635s9b82et+bPXPNnrnmz1zzZ635s9c82euebPXPNnrnmz1zzZ655s9c82euebvXPN3rn m71zzd655u9d83euebvXfN3rvm713zd675u9d83eu+bvXfOHr3nD17zh695w9e84evecPXvOXr/n L1/zl6/5y9f85f0HnT+g86f0HnT+g86f0Pnb+h87f0Xnb+i88f0Xnj+j88f0fnq/6Tz1f9J58v8A pfPn9N5+v+n8/X/T/wCgf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf 1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1H+gf1 H+gf1H+gf1H+gf4bzH/93mH/AOR2vddZs6FixeLFixYsWfe/HHgna911ns6FixZxYsWKs+9+OPBO 17rrRZ0KsWcWLFixZ958ceCdr3XWm81VWKsWLFiz7v448E7XuutVnNVVirFixYs+6+OPBO17rrXY vFWKqxYsVYs+5+OPBO17rrZV4sWKqxYsVZ9z8ceCdr3XW2rxVi8WLFixZ9x8ceCdr3XW68VVVVix YsWfb/HHgna911svFXiqqqsWKs+3+OPBO17rrfV4qqqxYsVZ9t8ceCdr3XXCrxVVVixViz7X448E 7XuuuFXiqqqsWKs+1+OPBO17rrfeKvFVVWLFirPtPjjwTte665VeKqqsWKsX7P448E7XuvxOMYxn UWrxVVVWLFWfZ/HHgna91+CzjGMYxjGMYxnGM4z87eKvFVVWLFWL9l8ceCdr3X32cYxnGMYxnSxj GM4xjOM/OVeKqqsWKs+y+OPBO17v73GMYzpYxjGMYxnSxjGc5+XvFXiqqqsVYv2Pxx4J2vd/d4xn RzoYxjGMYxjGdDOjnGfmLxV4qqqxYqz7H448E7Xu/uM4zoZzjGfYYxnOdDPzNXiqqqsVV+w+OPBO 17v7bPoYzoYxn1MYzoYz85eKvFVVVYqz7D448E7Xu/u8ZzjOc5xjGMYxjGM5znGc4z83VVVVVWKq /X+OPBO17v7nOlnGMYz62MYzjOM6GfmLxV4qqqrFWfX+OPBO17v7fOc6GM6OM+pjOjjOhnOfmaqq qqqqv1vjjwTte7+1zp50MZzjGMYxjGMYxjGc4zoZ0M/MXirxVVVVV+t8ceCdr3f3OM5znGMYxjGM 6WMYxjGMZ0s6WflLxVVVVVVV+t8ceCdr3f3Gc5zjGMZzjGM6OMYxnOMYxnOc5+ZvFXiqqqqr9X44 8E7Xu/ts5zjGM6GM6GMYxjGMYxnQxnOMYzjOc/LXmrxVVVVV+r8ceCdr3f2udHOhjOcYxjGMYxjG MYxjGM5xnOM/OXiqqqqqqr9T448E7Xu/s8+jnOMYxjPrYxjGM5z6Ofl6vFVVVVX6nxx4J2vd/ZZ9 DOcYxnRxjGMYxjGMYzo4xjOc+hn5Oqqqqqqqqr9T448E7Xu/u84zo4xjGMYxjGMYxjGMZ0c4z89e KvFVVVVX6fxx4J2vd/d50MYxjGMYxjGMYxjGMYxjGM6GM5z8zV4q8VVVVVfp/HHgna9391nOMZxj GcYxjGMYxjGMZxjGcYxnOfnavFVVVVVV+n8ceCdr3f3GdDGcYznGMYxjGMYxjGMYxnOcYzoZ+cvF Xiqqqqr9L448E7Xu/qz6uM6OMYxjOMYxjGMYxjGMYxnRxnOfSv5CrxV4qqqqq/S+OPBO17v6k+rn RxjGMYxjGMYxjGMYxjOMYxnSz6t/H1VVVVVVVVfpfHHgna939xnRxjOMYxjGMYxjGMYxjOMYzjGd LPzt4qqqqqqv0vjjwTte76c+wzo4znGMYxjGMYxjGMYxjGMYznGdHPsL+Lq8VeKqqqqv0fjjwTte 75nTn1JOjjOM4xjGMYxjGMYxjGMYxjGMYzjGdGz6l6dX8NVVV4qqqqq/R+OPBO17vpT6k5n0M4xn OMYxjGMYxjGMYxnGMZxnOdGz69/GXiqqqqqq/R+OPBO17ridOczozmdPOMZzjGMYxjGMYxjGMYxj GcYxn0bPp3i9G/h6vFVVVVVV+j8ceCdr3XRnM4nRnQnTk4xnGMYxjGMYxjGMYxjGMYxjOcZ9G9C9 O838VV4q8VVVVX6Pxx4J2vdp0ZxOZxOjOjOJOMZxnGM4xnGMYxjGMYxjGMYxnGcZ9K9G8Xm8XoVf w1XirxVVVVV+h8ceCdr3fQnM5nQicROhOJ0cYzjGcYxjGMYxjGMYxjGMYs4s6N4vQvNXo3i838TV VVVVVVVV+h8ceCdr3adCcTmcTozoToToSJOM4xjGMYxjGMYxjGMYzjOLFnNnRvQvRvF5vF6F/D1e Kqqqqqr9D448E7Xu5zOZxETmJxOhE4iJxIkSc4xjGMYxjGMYxjGMYxjOhZxeLxeKvNXir0KvRvNX 8LV4qqqqqqv0PjjwTte75nM5nE6M6E4iJxESc4xjGMYxjGMYxjGMYxjGM6F4vF4vF6F6N4vN5v4m rxV4qqqqv0PjjwTte7nQnE5nMTiJzETicTiToSM4xjGMYxjGMYxjGMYzjFnQs4qrxVXmrxV5vN4v Qv4arxV4qqqqv0PjjwTte74nM4icTiczmJxETiJxOInGJGMYxjGMYxjGMYxixZxYs4vFXiqvFXm8 Veaq8Xm8VfwtVVXiqqqqr0/jjwTte7ROZzEROYicRE4nERE4icSJEnGMYxjGMYxjGMZxixZxV4qq vF4qrxVXiqqrzeavFX8JVVV4qqqqq9P448E7Xu+IiJzOYnE4iJxEREROIiIk6GJGMYxjGMYxixjO KsXirzV4qrxVXi8VebzVVeb+Gq8VVVVVVXp/HHgna93zOYicxOInERERERERERE5kScYxjGMYxjG cWLOaqqqqqqqqqrxV4q81V5vQq/havFVVVVVV6fxx4J2vd9CcRETicRE4iIiIiJxEREREScYxjGM YxjGMZxYqqqqqqqqqqqqqqvF4qqvTq/havFVVVVVV6fxx4J2vdxOZzERE4iIiIiIiIiIiIiIk4kS JGMYxjGMYsWc2Kqqqqqqqqqqqqq8VVVebzVVfwtXiqqqqqq9P448E7Xu4nM5iIicRERERERERERE REREiRIxjGMYxjFixVVVVVVVVVVVXiqqrxVVV5vNXir+Eq8VVVVVVXp/HHgnad3E5nM5icRERERE RERERERERESJxIxjGMWcVViqqqqqqqqqqqqqqrxV5vN5q8Vfwt4q8VVVVXp/HHgnad2iInM5icRO IiIiIiIiIiIiIiIiRIxjGMWLFVVVVVVVVVVVVVVXirxV5vNVV5q/hKvFVVVVVV6fxx4J2ndoiJxE 5icROIiIiIiIiIiIiIiIiREjGMWLFiqqqqqqqqqqqqqqrxV4q81eKqr0L+EvNVVVVVV6fxx4J2nd oiIiJzE4icREREREREREREREREREjFiqqqqqqqqqqqqqqqqrxV4q81VVVXoX8JeavFVVVV6fxx4J 2ndoiIiJzE4iIiIiIiIiIiIiIiIiIiIxVVVVVVVVVVVVVVVVVVVXirxVVV4q81fwlXirxVVVVen8 ceCdp3aIiIicxOIiIiIiIiIiIiIiIiIiIiVq1VVVVVVVVVVVVVVVVVVV4q8VVVVVeav4SrxV4qqq qvT+OPBO07tEROInMTiJxEREREREREREREREREStWrVVVVVVVVVVVVVVVVV4q8Veaqqqr0L+EvNV VVVVV6fxx4J2ndoiJzOYnETiIiIiIiIiIiIiIiIlRK1rVqrVVVVVVVVVVVVVVVXirxV5q8VVXmr+ EvNVVVVVV6fxx4J2ndxOInM5icROIiIiIiIiIiIiIiIiVK1rWtWrVVVVVVVVVVVVVVVXirxV5vNX i81fwlXiqqqqqq9P448E7Tu4nM5nMTiIiIiIiIiIiIiIiIiVLxrWta1rVq1VVVVVVVVVVVVVVVXi rzebzV4q/hKvFXiqqqq9P448E7Xu4nM5iIicRERERERERERERERESpWta1rWta1aqqqqqqqqqqqq qqqrxVVV5vNVVX8JV4qqqqqqvT+OPBO17tOZzEROYiIiIiJxEREREREvMrWta1rWtatbzaqqqqvF VVVVVeKq8VVVebzeKv4WrxVVVVVVen8ceCdr3fM5iInE5icRERERERERETiJeda1rWta1rW8W81V VVVVXiqqrxV5vFVV5vQv4arxVVVVVVen8ceCdr3fETmInMTiIiJxEREROIiIl6ErWta1rWta1rVq 3m1VVeKqqqrxVVV4q81eLxV5q/havFVVVVVV6fxx4J2vd8TmcziInETiIiInETiIiIlS861rWta1 rWta1vNq1VVVVV4qqqqqrxVXi81eL+JqqqqqqqqvT+OPBO17tE5nMRE6ETiJxE4iInE5iVK3jWta 1rWta1rebWreKvFVVVVVV4q9GqvN5q8VfwlVVXiqqqqr0/jjwTte7nTiJzE4nMTiInERE4nMrWta 1rWta1rWta1a1vN4qqvFVeKvN4q81V6dX8LV4q8VVVVVen8ceCdr3c6E4nM5iczmJxETmcTjW8a1 rWta1rWta1rWta3i3i8W81V4q8VV4qrxebxV5v4arxV4qqqqv0PjjwT/AKz/AOPtV7We1ntd7Ye2 Htl7ae2ntt7ce3Ht17ee3nt9+gfoX6F+ifo36N+kfpX6Z+mfp36h+ofqX6p+qfq36x+sfrX61+uf rn65+vfr369+vfr369+vfrn65+ufrX61+sfrH6t+qfqn6l+ofqH6d+mfpn6V+kfo36N+ifoX6F+g e33t57ee3Xtx7ce23tp7ae2Xth7Ye13tZ7We1XtR7Ue03tR7Ue1HtR7Ue1HtR7Ue1HtR7Ue1HtR7 Ue1HtN7Te03tN7Te0ntJ7Se0ntF7Re0XtB7Qe0Hs97Pezns57NezHst7Leynsl7Iex3sZ7Few3sJ 7Af+fv8Az9/5+/8AP3/n7/z9/wCfvJfQ/wD6n//aAAgBAgIGPwD4YIIIIIIIIIIIIIIIIIIIIIII IIIWLop0U6KdFOinRTop0U6KdFOinRTop0U6KdFPxFPxFPxFfbiK+3EU/EU/EU/EU/EU/EU/EU/E U/EU/EU/EU/EU/EU/EU/EU/EU/8AX+T0PQ2bNmzZs2bNGjRo0aNGjRZZZZZo0aNGjRo0bNmzZs2b Nnoeh6Hoeh6GzZs2bNGjRo0WWWWWX8n/2gAIAQMCBj8A/ZcyKZFMimRTIpkUyKZFMimRTIpkUyKZ FMimRTIpkUyKZFMimRTIpkUyKZFMiq6ZMmTJkyZKKKKKKKKKKK+CiiiiiiiiijJkyZMmTJkwYMmT JkyUUUUUUV+D/9oACAEBAQY/AFGX9kRmThV7jyFXuPIVe48hV7jyFUt5CqW8hVLeQqlvIVS3kKpb yFUt5CqW8hVLeQqlvIVS3kKpbyFUt5CqW8hVLeQqlvIVS3kKpbyFUt5CqW8hVLgKpcBVLeQqlvIV S3kKpbyFUt5CqW8hVLeQqlwFUuAqlwFUuAqlwFUuAqlwFUuAqlwFUuAqlwFUuAqlwFUuAqlwFUuA qlwFUuAqlwFUuAqlwFUt5CqW8hVLeQqlvIVS3kKpbyFUt5CqXAVS4CqW8hVLeQqlvIVS3kKpbyFU t5CqW8hVLeQqlvIVS3kKpbyFUt5CqW8hVLeQqlvIVS3kKpbyFUt5CqW8hVLeQq9x5Cq3HkKvceQq 9x5Cr3HkKvceQq9x5Cr3HkKvceWAq9x5YCr3HlgKvceWAq9x5YCr3HlgKvceWArNx5YCs3HlgKzc eWArNx5YCs3HlgKzceWArNx5YCs3HlgK3ceWArdx5YCt3HlgK3ceWArd15YCu3XlgK7deWArt15Y Cu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7 deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15YCu3XlgK7deWArt15 YCu3XlgK7deWArt15YDtL7u8rfUjcSSTV/gjSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7r Ee5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sX lO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucq dLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR 7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU 7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0 sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHu cqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5Tu sR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSx eU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5y p0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6x HucqdLF5TusR7nKnSxeU7rEe5yp0sXlO6xHucqdLF5TusR7nKnSw/wAv6+P5/wCCTESYiTESYiTE SYiTESYiTESoiVESoiVESoiVESoiVESoiVES4iXES4iXES4iXES4iXES4jwiPCI8IjwiPCI8B4Dw HgPAeA8B4jxHiPEeI8R4jwHgPAeA8B4DwHgPCI8IjwiPCIlxEuIlxEuIlxEuIlxEuIlxEqIlREqI lREqIlREqIlREqIlREmIkxEmIkxEmIkxEmIkxEmIkxEiIkREiIkREiIkREiIkREiIkREiIkREiIk REiIkREiIkREiIkREiIkREiIkREiIkREiIkREiIkREiIkREiIkREiI9eI9eI9eI9eI9eI9eI9eI9 eI9eI9aI9aI9b7D1vsPW+w9X7D1fsPV+w9X7D1fsPV+w9X7Dd/8AF/X+v8i/b+r5+Py+P4+fn/TP /9k=" transform="matrix(.106 0 0 -.106 2.825 96.168)"></image></g></g><path fill="#6181B6" d="M64.026 93.694c32.36 0 58.594-13.295 58.594-29.694S96.387 34.306 64.026 34.306 5.433 47.601 5.433 64s26.233 29.694 58.593 29.694z"></path><path fill="#fff" d="M75.896 73.598l2.906-14.958c.656-3.377.11-5.896-1.62-7.486-1.677-1.54-4.523-2.288-8.703-2.288h-5.033l1.44-7.412a.955.955 0 00-.935-1.135h-6.947a.954.954 0 00-.936.771l-3.086 15.881c-.28-1.787-.973-3.323-2.079-4.591-2.038-2.332-5.261-3.515-9.58-3.515H27.856a.951.951 0 00-.935.771L20.674 81.78a.953.953 0 00.935 1.134h7.002a.953.953 0 00.936-.771l1.511-7.775h5.213c2.735 0 5.032-.296 6.827-.881 1.834-.596 3.522-1.607 5.011-3.001a15.364 15.364 0 002.96-3.676l-1.248 6.424a.95.95 0 00.935 1.134h6.947a.954.954 0 00.936-.771l3.429-17.645h4.767c2.031 0 2.626.404 2.787.578.147.159.452.718.11 2.48l-2.764 14.223a.95.95 0 00.935 1.134h7.058a.951.951 0 00.935-.769zm-32.208-12.36c-.437 2.242-1.259 3.842-2.444 4.755-1.205.927-3.132 1.397-5.727 1.397h-3.104l2.244-11.548h4.012c2.948 0 4.136.63 4.612 1.158.662.734.802 2.199.407 4.238zm61.916-8.858c-2.038-2.332-5.261-3.515-9.581-3.515H82.559a.952.952 0 00-.936.771L75.375 81.78a.953.953 0 00.935 1.134h7.003a.953.953 0 00.935-.771l1.512-7.775h5.212c2.735 0 5.033-.296 6.827-.881 1.835-.596 3.522-1.607 5.011-3.001 1.241-1.141 2.264-2.421 3.037-3.806a15.404 15.404 0 001.65-4.588c.797-4.094.16-7.363-1.893-9.712zm-7.262 8.858c-.437 2.242-1.259 3.842-2.444 4.755-1.204.927-3.131 1.397-5.727 1.397h-3.104l2.245-11.548h4.012c2.948 0 4.136.63 4.612 1.158.662.734.801 2.199.406 4.238z"></path><path fill="#000004" d="M38.67 54.89c2.66 0 4.434.491 5.32 1.474.885.982 1.097 2.668.633 5.057-.484 2.488-1.416 4.264-2.798 5.328-1.382 1.063-3.485 1.595-6.308 1.595h-4.26l2.614-13.453h4.799v-.001zM21.609 81.962h7.002l1.661-8.546h5.998c2.646 0 4.823-.277 6.532-.834 1.709-.556 3.263-1.488 4.661-2.797a14.369 14.369 0 002.85-3.569c.727-1.3 1.242-2.734 1.547-4.305.741-3.811.182-6.778-1.676-8.904s-4.812-3.189-8.862-3.189H27.856l-6.247 32.144zm35.394-40.691h6.947l-1.661 8.546h6.189c3.894 0 6.58.68 8.059 2.037 1.479 1.359 1.921 3.561 1.33 6.603l-2.906 14.959h-7.058l2.763-14.223c.314-1.618.199-2.722-.347-3.311-.546-.587-1.708-.882-3.485-.882h-5.553l-3.578 18.416h-6.947l6.247-32.145zM93.324 54.89c2.66 0 4.434.491 5.319 1.474.887.982 1.097 2.668.634 5.057-.484 2.488-1.417 4.264-2.799 5.328-1.382 1.063-3.484 1.595-6.308 1.595h-4.259l2.614-13.453h4.799v-.001zm-17.06 27.072h7.002l1.661-8.546h5.997c2.646 0 4.823-.277 6.532-.834 1.71-.556 3.264-1.488 4.661-2.797a14.35 14.35 0 002.851-3.569c.726-1.3 1.242-2.734 1.547-4.305.74-3.811.182-6.778-1.676-8.904s-4.812-3.189-8.863-3.189H82.511l-6.247 32.144z"></path>
          </svg>
          PHP
        </a>

        And i have knowlogment and experience build with
        <a href="https://react.dev" target="_blank" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline" rel="noreferrer">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-flex mr-1">
            <path d="M12.3029 5.50126C12.3029 4.68299 11.2822 3.90753 9.71741 3.42664C10.0785 1.82536 9.91803 0.551385 9.21085 0.143511C9.04785 0.047837 8.85726 0.0025177 8.64912 0.0025177V0.563973C8.76447 0.563973 8.85726 0.586633 8.935 0.629435C9.27605 0.825818 9.42401 1.57359 9.30865 2.53536C9.28107 2.77203 9.23593 3.02129 9.18076 3.27558C8.68924 3.15473 8.15259 3.06157 7.58836 3.00114C7.24981 2.53536 6.89873 2.11238 6.54515 1.74227C7.36266 0.9794 8.13002 0.561456 8.65163 0.561456V0C7.96201 0 7.05923 0.493477 6.14642 1.34951C5.23361 0.498512 4.33083 0.010071 3.64121 0.010071V0.571527C4.16031 0.571527 4.93017 0.986953 5.74769 1.74479C5.39661 2.1149 5.04553 2.53536 4.712 3.00114C4.14526 3.06157 3.60861 3.15473 3.11709 3.2781C3.05942 3.02632 3.01679 2.7821 2.98669 2.54795C2.86883 1.58618 3.01428 0.838407 3.35282 0.639506C3.42805 0.594186 3.52585 0.574044 3.64121 0.574044V0.0125887C3.43056 0.0125887 3.23997 0.0579079 3.07446 0.153582C2.36979 0.561456 2.21181 1.83291 2.57543 3.42916C1.01563 3.91257 0 4.68551 0 5.50126C0 6.31952 1.02064 7.09499 2.58546 7.57587C2.22435 9.17716 2.38484 10.4511 3.09202 10.859C3.25502 10.9547 3.44561 11 3.65625 11C4.34588 11 5.24865 10.5065 6.16146 9.65049C7.07427 10.5015 7.97705 10.9899 8.66667 10.9899C8.87732 10.9899 9.06791 10.9446 9.23342 10.8489C9.93809 10.4411 10.0961 9.1696 9.73245 7.57336C11.2872 7.09247 12.3029 6.31701 12.3029 5.50126ZM9.03782 3.82193C8.94503 4.14672 8.82968 4.48157 8.69927 4.81643C8.59646 4.61501 8.48863 4.4136 8.37076 4.21218C8.25541 4.01076 8.13253 3.81437 8.00965 3.62303C8.36575 3.6759 8.70931 3.74136 9.03782 3.82193ZM7.88928 6.50332C7.69368 6.84321 7.49306 7.16548 7.28492 7.46509C6.91127 7.49782 6.53261 7.51545 6.15143 7.51545C5.77277 7.51545 5.3941 7.49783 5.02296 7.46761C4.81482 7.168 4.61169 6.84825 4.41609 6.51087C4.22551 6.18105 4.05247 5.84619 3.89449 5.50881C4.04997 5.17143 4.22551 4.83406 4.41358 4.50423C4.60919 4.16434 4.8098 3.84207 5.01794 3.54246C5.39159 3.50973 5.77026 3.4921 6.15143 3.4921C6.53010 3.4921 6.90876 3.50973 7.27991 3.53994C7.48805 3.83955 7.69117 4.15930 7.88677 4.49668C8.07736 4.82650 8.25039 5.16136 8.40838 5.49874C8.25039 5.83612 8.07736 6.17349 7.88928 6.50332ZM8.69927 6.17601C8.83469 6.51339 8.95005 6.85077 9.04534 7.17807C8.71683 7.25864 8.37076 7.32662 8.01216 7.37949C8.13504 7.18563 8.25792 6.98672 8.37327 6.78279C8.48863 6.58137 8.59646 6.37743 8.69927 6.17601ZM6.15645 8.86244C5.92323 8.62074 5.69001 8.35134 5.45930 8.05676C5.68500 8.06683 5.91571 8.07439 6.14893 8.07439C6.38465 8.07439 6.61787 8.06935 6.84607 8.05676C6.62038 8.35134 6.38716 8.62074 6.15645 8.86244ZM4.29071 7.37949C4.16532 7.81689 4.04244 8.01579 3.92709 8.21973C3.81173 8.42115 3.70390 8.62257 3.60108 8.82399C3.46567 8.48661 3.35031 8.14923 3.25502 7.82193C3.58353 7.74388 3.92960 7.67590 4.28820 7.62303ZM2.01871 6.77523C1.13098 6.39506 0.556713 5.89654 0.556713 5.50126C0.556713 5.10597 1.13098 4.60494 2.01871 4.22728C2.23438 4.13413 2.47010 4.05104 2.71335 3.97299C2.85629 4.46647 3.04437 4.98009 3.27759 5.50629C3.04688 6.02998 2.86131 6.54108 2.72088 7.03204C2.47261 6.95399 2.23689 6.86839 2.01871 6.77523ZM3.36787 10.3731C3.02682 10.1767 2.87886 9.42893 2.99422 8.46715C3.02180 8.23049 3.06694 7.98123 3.12211 7.72694C3.61362 7.84779 4.15027 7.94095 4.71451 8.00137C5.05305 8.46715 5.40413 8.89013 5.75772 9.26024C4.94021 10.0231 4.17284 10.4411 3.65124 10.4411C3.53839 10.4385 3.44310 10.4159 3.36787 10.3731ZM9.31617 8.45457C9.43404 9.41634 9.28859 10.1641 8.95005 10.363C8.87481 10.4083 8.77701 10.4285 8.66166 10.4285C8.14256 10.4285 7.37269 10.013 6.55518 9.25521C6.90626 8.88510 7.25734 8.46464 7.59086 7.99886C8.15761 7.93843 8.69426 7.84527 9.18577 7.72190C9.24345 7.97620 9.28859 8.22042 9.31617 8.45457ZM10.2816 6.77523C10.0660 6.86839 9.83026 6.95148 9.58701 7.02953C9.44407 6.53605 9.25599 6.02243 9.02277 5.49622C9.25348 4.97253 9.43905 4.46143 9.57948 3.97047C9.82775 4.04852 10.0635 4.13413 10.2842 4.22728C11.1719 4.60746 11.7462 5.10597 11.7462 5.50126C11.7436 5.89654 11.1694 6.39757 10.2816 6.77523Z" fill="#61DAFB"></path><path d="M6.13697 6.65389C6.77191 6.65389 7.28663 6.13725 7.28663 5.49994C7.28663 4.86263 6.77191 4.34599 6.13697 4.34599C5.50203 4.34599 4.9873 4.86263 4.9873 5.49994C4.9873 6.13725 5.50203 6.65389 6.13697 6.65389Z" fill="#61DAFB">
            </path>
          </svg>
          React
        </a>

        <a href="https://www.typescriptlang.org/" target="_blank" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline" rel="noreferrer">
          <svg width="14" height="12" className="text-typescript-primary mr-1" viewBox="0 0 128 128">
            <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
            <path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.10 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
          </svg>
          Typescript
        </a>

        <a href="https://rubyonrails.org/" target="_blank" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline" rel="noreferrer">
          <svg width="14" height="12" className="text-ruby-primary mr-1" viewBox="0 0 128 128">
            <linearGradient id="ruby-original-a" gradientUnits="userSpaceOnUse" x1="157.08" y1="2382.05" x2="131.682" y2="2426.892" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#FB7655"></stop>
              <stop offset="0" stopColor="#FB7655"></stop>
              <stop offset=".41" stopColor="#E42B1E"></stop>
              <stop offset=".99" stopColor="#900"></stop>
              <stop offset="1" stopColor="#900"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-a)" d="M97.078 83.214L28.34 124.031l89.003-6.04 6.855-89.745z"></path>
            <linearGradient id="ruby-original-b" gradientUnits="userSpaceOnUse" x1="169.731" y1="2419.72" x2="136.998" y2="2441.685" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#871101"></stop>
              <stop offset="0" stopColor="#871101"></stop>
              <stop offset=".99" stopColor="#911209"></stop>
              <stop offset="1" stopColor="#911209"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-b)" d="M117.488 117.93l-7.649-52.799-20.837 27.514z"></path>
            <linearGradient id="ruby-original-c" gradientUnits="userSpaceOnUse" x1="143.542" y1="2380.69" x2="110.81" y2="2402.655" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#871101"></stop>
              <stop offset="0" stopColor="#871101"></stop>
              <stop offset=".99" stopColor="#911209"></stop>
              <stop offset="1" stopColor="#911209"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-c)" d="M117.592 117.93l-56.044-4.399-32.91 10.385z"></path>
            <linearGradient id="ruby-original-d" gradientUnits="userSpaceOnUse" x1="74.817" y1="2435.622" x2="79.891" y2="2402.644" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset=".23" stopColor="#E57252"></stop>
              <stop offset=".46" stopColor="#DE3B20"></stop>
              <stop offset=".99" stopColor="#A60003"></stop>
              <stop offset="1" stopColor="#A60003"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-d)" d="M28.717 123.928l14.001-45.867-30.81 6.588z"></path>
            <linearGradient id="ruby-original-e" gradientUnits="userSpaceOnUse" x1="109.719" y1="2466.413" x2="111.589" y2="2432.757" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset=".23" stopColor="#E4714E"></stop>
              <stop offset=".56" stopColor="#BE1A0D"></stop>
              <stop offset=".99" stopColor="#A80D00"></stop>
              <stop offset="1" stopColor="#A80D00"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-e)" d="M88.996 92.797l-12.882-50.46-36.866 34.558z"></path>
            <linearGradient id="ruby-original-f" gradientUnits="userSpaceOnUse" x1="140.691" y1="2497.523" x2="146.289" y2="2473.401" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset=".18" stopColor="#E46342"></stop>
              <stop offset=".4" stopColor="#C82410"></stop>
              <stop offset=".99" stopColor="#A80D00"></stop>
              <stop offset="1" stopColor="#A80D00"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-f)" d="M121.275 43.047L86.426 14.585l-9.704 31.373z"></path>
            <linearGradient id="ruby-original-g" gradientUnits="userSpaceOnUse" x1="123.6" y1="2506.018" x2="147.719" y2="2518.077" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset=".54" stopColor="#C81F11"></stop>
              <stop offset=".99" stopColor="#BF0905"></stop>
              <stop offset="1" stopColor="#BF0905"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-g)" d="M104.978 4.437L84.481 15.764 71.551 4.285z"></path>
            <linearGradient id="ruby-original-h" gradientUnits="userSpaceOnUse" x1="53.674" y1="2444.028" x2="55.66" y2="2424.153" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset="0" stopColor="#fff"></stop>
              <stop offset=".31" stopColor="#DE4024"></stop>
              <stop offset=".99" stopColor="#BF190B"></stop>
              <stop offset="1" stopColor="#BF190B"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-h)" d="M3.802 100.034l8.586-15.659L5.442 65.72z"></path>
            <path fill="#fff" d="M4.981 65.131l6.987 19.821 30.365-6.812L77 45.922l9.783-31.075L71.38 3.969l-26.19 9.802c-8.252 7.675-24.263 22.86-24.84 23.146-.573.291-10.575 19.195-15.369 28.214z"></path>
            <linearGradient id="ruby-original-i" gradientUnits="userSpaceOnUse" x1="40.026" y1="2418.781" x2="133.345" y2="2514.739" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#BD0012"></stop>
              <stop offset="0" stopColor="#BD0012"></stop>
              <stop offset=".07" stopColor="#fff"></stop>
              <stop offset=".17" stopColor="#fff"></stop>
              <stop offset=".27" stopColor="#C82F1C"></stop>
              <stop offset=".33" stopColor="#820C01"></stop>
              <stop offset=".46" stopColor="#A31601"></stop>
              <stop offset=".72" stopColor="#B31301"></stop>
              <stop offset=".99" stopColor="#E82609"></stop>
              <stop offset="1" stopColor="#E82609"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-i)" d="M29.519 29.521c17.882-17.73 40.937-28.207 49.785-19.28 8.843 8.926-.534 30.62-18.418 48.345-17.884 17.725-40.653 28.779-49.493 19.852-8.849-8.92.242-31.191 18.126-48.917z"></path>
            <linearGradient id="ruby-original-j" gradientUnits="userSpaceOnUse" x1="111.507" y1="2409.102" x2="83.398" y2="2416.039" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#8C0C01"></stop>
              <stop offset="0" stopColor="#8C0C01"></stop>
              <stop offset=".54" stopColor="#990C00"></stop>
              <stop offset=".99" stopColor="#A80D0E"></stop>
              <stop offset="1" stopColor="#A80D0E"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-j)" d="M28.717 123.909l13.89-46.012 46.135 14.82c-16.68 15.642-35.233 28.865-60.025 31.192z"></path>
            <linearGradient id="ruby-original-k" gradientUnits="userSpaceOnUse" x1="159.785" y1="2442.837" x2="134.814" y2="2465.217" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#7E110B"></stop>
              <stop offset="0" stopColor="#7E110B"></stop>
              <stop offset=".99" stopColor="#9E0C00"></stop>
              <stop offset="1" stopColor="#9E0C00"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-k)" d="M77.062 45.831l11.844 46.911c13.934-14.65 26.439-30.401 32.563-49.883l-44.407 2.972z"></path>
            <linearGradient id="ruby-original-l" gradientUnits="userSpaceOnUse" x1="168.959" y1="2483.901" x2="156.521" y2="2497.199" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#79130D"></stop>
              <stop offset="0" stopColor="#79130D"></stop>
              <stop offset=".99" stopColor="#9E120B"></stop>
              <stop offset="1" stopColor="#9E120B"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-l)" d="M121.348 43.097c4.74-14.305 5.833-34.825-16.517-38.635l-18.339 10.13 34.856 28.505z"></path>
            <path fill="#9E1209" d="M3.802 99.828c.656 23.608 17.689 23.959 24.945 24.167l-16.759-39.14-8.186 14.973z"></path>
            <radialGradient id="ruby-original-m" cx="138.703" cy="2464.789" r="30.601" gradientTransform="matrix(1 0 0 -1 -47.5 2517)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#A80D00"></stop>
              <stop offset="0" stopColor="#A80D00"></stop>
              <stop offset=".99" stopColor="#7E0E08"></stop>
              <stop offset="1" stopColor="#7E0E08"></stop>
            </radialGradient>
            <path fill="url(#ruby-original-m)" d="M77.128 45.904c10.708 6.581 32.286 19.798 32.723 20.041.68.383 9.304-14.542 11.261-22.976l-43.984 2.935z"></path>
            <radialGradient id="ruby-original-n" cx="96.325" cy="2424.465" r="40.679" gradientTransform="matrix(1 0 0 -1 -47.5 2517)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#A30C00"></stop>
              <stop offset="0" stopColor="#A30C00"></stop>
              <stop offset=".99" stopColor="#800E08"></stop>
              <stop offset="1" stopColor="#800E08"></stop>
            </radialGradient>
            <path fill="url(#ruby-original-n)" d="M42.589 77.897l18.57 35.828c10.98-5.955 19.579-13.211 27.454-20.983L42.589 77.897z"></path>
            <linearGradient id="ruby-original-o" gradientUnits="userSpaceOnUse" x1="67.509" y1="2393.115" x2="57.373" y2="2427.506" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#8B2114"></stop>
              <stop offset="0" stopColor="#8B2114"></stop>
              <stop offset=".43" stopColor="#9E100A"></stop>
              <stop offset=".99" stopColor="#B3100C"></stop>
              <stop offset="1" stopColor="#B3100C"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-o)" d="M11.914 84.904l-2.631 31.331c4.964 6.781 11.794 7.371 18.96 6.842-5.184-12.9-15.538-38.696-16.329-38.173z"></path>
            <linearGradient id="ruby-original-p" gradientUnits="userSpaceOnUse" x1="145.272" y1="2507.076" x2="167.996" y2="2497.045" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
              <stop offset="0" stopColor="#B31000"></stop>
              <stop offset="0" stopColor="#B31000"></stop>
              <stop offset=".44" stopColor="#910F08"></stop>
              <stop offset=".99" stopColor="#791C12"></stop>
              <stop offset="1" stopColor="#791C12"></stop>
            </linearGradient>
            <path fill="url(#ruby-original-p)" d="M86.384 14.67l36.891 5.177c-1.969-8.343-8.015-13.727-18.32-15.41L86.384 14.67z"></path>
          </svg>
          Ruby
        </a>
      </p>

      <ImageGallery />

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I have experience designing user-facing features for web applications and collaborating with designers.
          In my previous roles, I also worked in support, improving communication, and as a Junior, I honed my problem-solving skills.
          I always prioritize finding solutions.
        </p>
        <p className='mt-5'>
          I've had the privilege of delivering talks at tech community events, where I advocate for tech development and share insights about the Front End world.
          These experiences have allowed me to leverage my public speaking skills, enabling effective communication with clients, superiors, and fellow tech enthusiasts.
        </p>
      </div>
    </div>
  )
}

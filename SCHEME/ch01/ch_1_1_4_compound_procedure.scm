; ch_1_1_4_compound_procedure.scm
;; square라는 프로시저 정의 , x는 파라미터를 의미한다.
(load "../utils/utils.scm")

(define (square x) (* x x))
; (display (square 21))
; (newline)
(dn (square 21))
(dn (square (+ 2 5)))
; ;; square 만들때 *라는 기본 프로시저 사용한 것처럼 square또한 다른 프로시저 정의에 사용 가능 
; (+ (square x) (square y)) ;; 제곱의 합
(define (sum-of-squares x y)
  (+ (square x) (square y)))
 
(dn (sum-of-squares 3 4))

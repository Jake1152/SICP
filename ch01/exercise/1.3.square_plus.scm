; 1.3.square_plus.scm
(load "../../utils/utils.scm")
(define (square-plus x y z)
    ; (if)

    ; x > y, y > z
    (and (> x  y) (> y z))
)

; (dn squar-plus.scm)

(dn (cond (and (> 3  2) (> 2 1) 3 * 2)
          (else -1)
    )
)

; 
; (dn )

; (cond (and (> 3  2) (> 2 1)))

; (dn (cond ((= 3 4) 3 (else -1))))


; ==================

; (define (discriminal a b)
;     (* (cond ((> a b) a)
;             ((< a b) b)
;             (else -1))
;     (+ a 1))
; )
; (dn (discriminal 20 20))
(module
  ;; Returns 1 if leap year, 0 otherwise
  (func (export "isLeap") (param $year i32) (result i32)
    (i32.and
        (i32.eqz ;; Compare if Equal to Zero (return 1 if equal (is leap Year), 0 otherwise)
          (i32.rem_u (local.get $year) (i32.const 4))) ;; if $year is diviable by 4
    
        (i32.or 
          (i32.ne ;; not equal 
            (i32.rem_u (local.get $year) (i32.const 100)) ;; if $year is diviable by 100
            (i32.const 0)) ;; not leap year
      
          (i32.eqz ;; Compare if Equal to Zero
            (i32.rem_u (local.get $year) (i32.const 400))))))) ;; if $year is diviable by 400

(module
  (memory (export "mem") 1)
  (func (export "score") (param $x f32) (param $y f32) (result i32)
    ;; Crete a variable using param $x and $y to find where the dart lands (inner_circle, middle_circle, outer_circle, outside)

    ;; dart position
    (local $dart_pos f32)
    (local.set $dart_pos (f32.add 
      (f32.mul (local.get $x) (local.get $x))
      (f32.mul (local.get $y) (local.get $y))
    ))
  
    ;; if dart position $dart_pos is less or equal to 1
    (if
      (f32.le (local.get $dart_pos) (f32.const 1.0))
      (return (i32.const 10)) ;; 10 points
    )
  
    ;; if dart position $dart_pos is less or equal to 25 (5 unit radius)
    (if
      (f32.le (local.get $dart_pos) (f32.const 25.0))
      (return (i32.const 5)) ;; 5 points
    )

    ;; if dart position $dart_pos is less or equal to 100 (10 unit radius)
    (if
      (f32.le (local.get $dart_pos) (f32.const 100.0))
      (return (i32.const 1)) ;; 1 points
    )
  
    ;; if dart position $dart_pos isn't any of the above 
    (return (i32.const 0)) ;; 0 points
  )
)

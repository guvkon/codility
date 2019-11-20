quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
    let smallerSorted = quicksort [a | a <- xs, a <= x]
        biggerSorted = quicksort [a | a <- xs, a > x]
    in smallerSorted ++ [x] ++ biggerSorted

-- solution :: (Eq a, Ord a) => [a] -> a
-- solution [x] = x
-- solution x = if (head x) `elem` (tail x) then

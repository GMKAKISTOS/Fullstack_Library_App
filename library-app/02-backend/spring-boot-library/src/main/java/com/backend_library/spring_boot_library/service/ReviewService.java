package com.backend_library.spring_boot_library.service;

import com.backend_library.spring_boot_library.dao.BookRepository;
import com.backend_library.spring_boot_library.dao.ReviewRepository;
import com.backend_library.spring_boot_library.entity.Review;
import com.backend_library.spring_boot_library.requestmodels.ReviewRequest;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;

@Service
@Transactional
public class ReviewService {

    //private BookRepository bookRepository;

    private ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(/*BookRepository bookRepository,*/ ReviewRepository reviewRepository){
        //this.bookRepository = bookRepository;
        this.reviewRepository = reviewRepository;
    }

    public void postReview(String userEmail, ReviewRequest reviewRequest) throws Exception{
        Review validateReview = reviewRepository.findByUserEmailAndBookId(userEmail, reviewRequest.getBookId());

        if(validateReview != null){
            throw new Exception("Review already created!");
        }
        else{
            Review review = new Review();
            review.setBookId(reviewRequest.getBookId());
            review.setRating(reviewRequest.getRating());
            review.setUserEmail(userEmail);

            if(reviewRequest.getReviewDescription().isPresent()){
                review.setReviewDescription(reviewRequest.getReviewDescription().map(
                Object::toString
                ).orElse(null));
            }
            review.setDate(Date.valueOf(LocalDate.now()));
            reviewRepository.save(review);
        }
    }

    public Boolean userReviewListed(String userEmail, Long bookId) {
        Review validateReview = reviewRepository.findByUserEmailAndBookId(userEmail, bookId);
        if (validateReview != null) {
            return true;
        } else {
            return false;
        }
    }
    }

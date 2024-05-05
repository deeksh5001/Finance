package com.example.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.dtoRequest.FeedbackRequest;
import com.example.demo.dtoResponse.FeedbackResponse;
import com.example.demo.model.Feedback;
import com.example.demo.repository.FeedbackRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedbackService {
	
	 private final FeedbackRepository feedbackRepository;
	 
	 public boolean saveFeedback(FeedbackRequest request) {
	        if (feedbackRepository.findByNameAndEmail(request.getName(),
	                request.getEmail()).isPresent()) {
	            return false;
	        }

	        var feedback = Feedback.builder()
	                .name(request.getName())
	                .email(request.getEmail())
	                .subject(request.getSubject())
	                .message(request.getMessage())
	                .build();
	        feedbackRepository.save(feedback);
	        return true;
	    }

	 
	 public List<FeedbackResponse> getFeedbacks() {
	        List<Feedback> feedbacks = feedbackRepository.findAll();
	        return feedbacks.stream()
	                .map(feedback -> {
	                    FeedbackResponse response = new FeedbackResponse();
	                    response.setFid(feedback.getFid());
	                    response.setName(feedback.getName());
	                    response.setEmail(feedback.getEmail());
	                    response.setSubject(feedback.getSubject());
	                    response.setMessage(feedback.getMessage());
	                    return response;
	                })
	                .collect(Collectors.toList());
	    }
}

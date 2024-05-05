package com.example.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.client.FeedbackClient;
import com.example.demo.dtoResponse.FeedbackResponse;
import com.example.demo.vo.Feedback;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedbackService {
	private final FeedbackClient feedbackClient;
	
	public List<FeedbackResponse> getFeedbacks() {
        List<Feedback> feedbacks = feedbackClient.getFeedbacks();
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

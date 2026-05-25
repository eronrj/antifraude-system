package com.antiblefe.service;

public class PoissonService {

    public double probability(
            int goals,
            double lambda){

        return Math.pow(lambda, goals)
                * Math.exp(-lambda)
                / factorial(goals);
    }

    private long factorial(int n){

        long f = 1;

        for(int i = 2; i <= n; i++){
            f *= i;
        }

        return f;
    }
}

package com.abcfurniture.server.service;

import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;


@Service
public class TokenBlacklistService {
    private final Set<String> blacklist = new HashSet<>();

    public void addToBlacklist(String token) {
        blacklist.add(token);
    }

    public boolean isBlacklisted(String token) {
        return blacklist.contains(token);
    }

    public void invalidateToken(String token) {
        addToBlacklist(token);
    }

}

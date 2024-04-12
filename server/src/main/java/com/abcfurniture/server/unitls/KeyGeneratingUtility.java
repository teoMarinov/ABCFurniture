package com.abcfurniture.server.unitls;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;

public class KeyGeneratingUtility {


    public static KeyPair generateRsaKey() {
        KeyPair keyPair;

        KeyPairGenerator keyPairGenerator;

        {
            try {
                keyPairGenerator = KeyPairGenerator.getInstance("RSA");
                keyPairGenerator.initialize(2048);
                keyPair = keyPairGenerator.generateKeyPair();
            } catch (NoSuchAlgorithmException e) {
                throw new IllegalStateException(e);
            }
        }
        return keyPair;
    }

}

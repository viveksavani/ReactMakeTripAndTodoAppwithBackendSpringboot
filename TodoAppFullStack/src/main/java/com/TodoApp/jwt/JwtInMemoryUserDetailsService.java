package com.TodoApp.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "admin",
        "$2a$10$DStADG3Ruf740BpTxCbb1.N7n1RkxCRcyQjPnlF4sTZfAlAt4MQBK", "ROLE_USER_2"));
    inMemoryUserList.add(new JwtUserDetails(2L, "vivek",
            "$2a$10$suJUJPO7e.xtom44xNtzKuFQ.Y65W06aHBHbXMkspurwfbsgf2yt2", "ROLE_USER_2"));
    
    //$2a$10$DStADG3Ruf740BpTxCbb1.N7n1RkxCRcyQjPnlF4sTZfAlAt4MQBK

  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}



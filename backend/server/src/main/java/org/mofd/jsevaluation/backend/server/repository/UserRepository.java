package org.mofd.jsevaluation.backend.server.repository;

import org.mofd.jsevaluation.backend.server.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * UserRepository.
 *
 * @author konstantinsteuer
 * @since 16.11.14
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    public User findByBenutzernameAndPasswort(String benutzername, String passwort);
}
